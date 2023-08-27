import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

import { ApiUrls } from '../constants/api-urls.constant';
import { RestApiService } from './rest-api.service';
import { LoginData } from '../model/userData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly restApi: RestApiService) { }

  login(email: string, password: string, rememberMe = false): void {
    const url = ApiUrls.authenticate;
    const bodyParms = {
      username: email,
      password: password,
      rememberMe: rememberMe

    }
    this.restApi.postData(url, bodyParms).pipe(
      shareReplay(1)
    ).subscribe({
      next: (data): void => {
        console.log(data)
        this.setAuthToken(data as LoginData)
      },
      error: (errorData) => {
        console.log(errorData)
      }
    })
  }

  setAuthToken(loginData: LoginData) {
    sessionStorage.setItem('token', loginData.data.id_token);
  }

  getAuthToken(): string {
    return sessionStorage.getItem('token') as string
  }
}
