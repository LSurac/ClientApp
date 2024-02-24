import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  private authHeader: string;
  public accessJWTLocalSubject: BehaviorSubject<string | undefined>;
  private accessJWTSubscription: Subscription | undefined;

  constructor(
    private authService: AuthService,
  ) {
    this.authHeader = 'Authorization';
    this.accessJWTLocalSubject = new BehaviorSubject<string | undefined>(undefined);

    this.accessJWTSubscriptionInit();
  }

  private accessJWTSubscriptionInit() {
    if (!this.accessJWTSubscription) {
      this.accessJWTSubscription = this.authService.accessJWTChangedGet().subscribe(
        (accessJWT: string | undefined) => {
          this.accessJWTLocalSubject.next(accessJWT);
        }
      );
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.requestAddWithCredentials(request);

    if (request.url.includes('UserLoginByRefreshToken') || request.url.includes('UserLogout' || request.url.includes('UserLogin'))) {
      return next.handle(request)
    }

    if (this.authService.isAuthenticated() == true) {
      request = this.requestSetAccessJWT(request);
    }

    return next.handle(request)
  }

  private logout() {
    this.authService.accessJWTClear();
  }

  private requestAddWithCredentials(request: HttpRequest<unknown>): HttpRequest<unknown> {
    let addWithCredentialsHeader = (request.url.includes('/api/Employee/EmployeeLogin'));

    if (addWithCredentialsHeader) {
      return request.clone({
        withCredentials: true
      });

    } else {
      return request;
    }
  }

  private requestSetAccessJWT(request: HttpRequest<unknown>): HttpRequest<unknown> {
    let accessJWT = this.accessJWTLocalSubject.value;
    if (!accessJWT) {
      return request;
    }
    return request.clone({
      headers: request.headers.set(this.authHeader, "Bearer " + accessJWT)
    });
  }
}
