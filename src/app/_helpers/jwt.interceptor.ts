import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(window.sessionStorage.getItem('access-token'));

    if (window.sessionStorage.getItem('access-token')) {
      const clonedRequest = request.clone({
        setHeaders: {
          authorization: window.sessionStorage.getItem('access-token') || '',
        },
      });
      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
}
