import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private readonly httpClient: HttpClient,
    ) { }

  public getData(url: string): Observable<any> {
    return this.httpClient.get(url, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public postData(url: string, bodyParams: any): Observable<any> {
    return this.httpClient.post(url, bodyParams, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public updateData(url: string, bodyParams: any): Observable<any> {
    return this.httpClient.put(url, bodyParams, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public deleteData(url: string, bodyParams: any): Observable<any> {
    return this.httpClient.put(url, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
