import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, shareReplay } from 'rxjs';

import { ApiUrls } from '../constants/api-urls.constant';
import { RestApiService } from './rest-api.service';
import { LoginData, UserAccountDetails } from '../model/userData.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject$: BehaviorSubject<LoginData> = new BehaviorSubject<LoginData>({} as LoginData);
  private _currentUser$ = this.currentUserSubject$.asObservable();

  constructor(
    private readonly restApi: RestApiService,
    private readonly router: Router
  ) { }

  login(email: string, password: string, rememberMe = false): Observable<UserAccountDetails> {
    const url = ApiUrls.authenticate;
    const bodyParms = {
      username: email,
      password: password,
      rememberMe: rememberMe

    }
    return this.restApi.postData(url, bodyParms).pipe(
      shareReplay(1),
      mergeMap((loginData) => {
        this.setAuthToken(loginData as LoginData);
        localStorage.setItem('currentUser', JSON.stringify(loginData));
        this.currentUserSubject$.next(loginData);
        return this.getUserAccountData(loginData);
      })
    );
  }

  setAuthToken(loginData: LoginData) {
    sessionStorage.setItem('authToken', loginData.data.id_token);
  }

  getAuthToken(): string {
    return sessionStorage.getItem('authToken') as string;
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('authToken');
    this.currentUserSubject$.next({} as LoginData);
  }

  getUserData$(): Observable<LoginData> {
    return this._currentUser$;
  }

  getUserAccountData(loginData: LoginData): Observable<UserAccountDetails> {
    return this.restApi.getData(ApiUrls.userAccountDetails).pipe(
      map(userData =>  userData)
    );
  }
}
