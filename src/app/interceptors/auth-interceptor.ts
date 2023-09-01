import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const authToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb250YWN0QGVjbWV6LmNvbSIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY5MzA2NDU4OX0.OTH32-Kfy-bqCOGr3xEffC2LKWzs7VfrsmAI1NIYkqMylIV1d1w8eDCt_VnTaNyXDLtrvnhlpWI-VX_tSH8H5w';
    const authToken = this.auth.getAuthToken();
    let authReq: HttpRequest<unknown>;
    if(authToken) {
      authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });
    } else {
      authReq = request;
    }

    return next.handle(authReq);
  }
}
