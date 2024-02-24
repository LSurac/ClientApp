import { Injectable, Injector, inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LocalStorageService } from './localstorage.service';
import { ENVIRONMENT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected jwtHelper = new JwtHelperService();

  public accessJWTSubject: BehaviorSubject<string>;
  public employeeIdSubject: BehaviorSubject<string | undefined>;
  protected authenticatedSource: BehaviorSubject<boolean>;
  protected authenticatedChanged: Observable<boolean>;

  private accessJWTSubscription: Subscription | undefined;
  private userNumber: string | undefined;

  protected lStorage: LocalStorageService;

  constructor() {
    this.lStorage = inject(LocalStorageService);

    let accessJWT = this.lStorage.accessJWTGet();
    let isAccessJWTExpired: boolean = true;

    if (accessJWT) {
      isAccessJWTExpired = this.jwtHelper.isTokenExpired(accessJWT);
    }

    let isAuthenticated = !isAccessJWTExpired;
    this.accessJWTSubject = new BehaviorSubject<string>(accessJWT);

    this.employeeIdSubject = new BehaviorSubject<string | undefined>(undefined);

    this.authenticatedSource = new BehaviorSubject<boolean>(isAuthenticated);
    this.authenticatedChanged = this.authenticatedSource.asObservable();

    this.accessJWTSubscriptionInit();
  }

  private accessJWTSubscriptionInit() {
    if (!this.accessJWTSubscription) {
      this.accessJWTSubscription = this.accessJWTSubject.subscribe(
        (jwt: string) => {
          let jwtDecoded = this.jwtHelper.decodeToken(jwt);

          setTimeout(() => {
            let authenticationState: boolean = jwt ? true : false;
            this.authenticationStateUpdate(authenticationState);

            this.employeeIdUpdate(jwtDecoded?.UserNumber);
          });
        }
      );
    }
  }

  public accessJWTChangedGet(): Observable<string> {
    return this.accessJWTSubject.asObservable();
  }

  private authenticationStateUpdate(desiredAuthenticationState: boolean) {
    let currentAuthenticationState = this.isAuthenticated();

    if (desiredAuthenticationState) {
      desiredAuthenticationState = false;
    }

    let hasAuthenticationStateChanged = currentAuthenticationState != desiredAuthenticationState;

    if (!hasAuthenticationStateChanged) {
      return;
    }

    this.authenticatedSource.next(desiredAuthenticationState);
  }

  public authenticatedGet(): Observable<boolean> {
    return this.authenticatedChanged;
  }

  public accessJWTSet(token: string): string | undefined {
    let areStoredAndReceivedTokensEqual = this.accessJWTSubject.value === token;
    if (areStoredAndReceivedTokensEqual) {
      return this.accessJWTSubject.value;
    }

    let isAccessJWTValid = this.accessJWTValidate(token);

    if (isAccessJWTValid) {
      let accessJWTStored: string | undefined = this.lStorage.accessJWTSet(token);
      let decodeToken = this.jwtHelper.decodeToken(token);
      this.userNumber = decodeToken.UserNumber;
      this.accessJWTSubjectSet(accessJWTStored);
      return accessJWTStored;
    } else {
      this.accessJWTClear();
      return undefined;
    }
  }

  public accessJWTClear() {
    this.lStorage.accessJWTClear();
    this.userNumber = undefined;
    this.accessJWTSubjectSet("");
    this.authenticationStateUpdate(false);
  }

  public isAuthenticated(): boolean {
    return this.authenticatedSource.value;
  }

  private accessJWTSubjectSet(desiredAuthenticationState: string) {
    this.accessJWTSubject.next(desiredAuthenticationState);
  }

  public accessJWTValidateFromLocalStorage() {
    let accessJWT = this.lStorage.accessJWTGet();
    return this.accessJWTValidate(accessJWT);
  }

  public accessJWTValidate(token: string | undefined): boolean {
    if (token == undefined) {
      return false;
    }

    let decodeToken = this.jwtHelper.decodeToken(token);

    if (this.userNumber != undefined && this.userNumber != decodeToken.UserNumber) {
      window.location.reload();
      return true;
    }

    let isTokenExpired = this.jwtHelper.isTokenExpired(token);

    return !isTokenExpired;
  }

  public accessJWTValidityGet() {
    let accessJWT = this.lStorage.accessJWTGet();
    if (accessJWT == undefined) {
      return false;
    }

    return this.accessJWTValidate(accessJWT);
  }

  public isAccessJWTValid(accessJWT: string): boolean {
    return this.accessJWTValidate(accessJWT);
  }

  private employeeIdUpdate(employeeId: string | undefined) {
    let areStoredAndReceivedemployeeIdEqual = this.employeeIdSubject.value === employeeId;
    if (areStoredAndReceivedemployeeIdEqual) {
      return;
    }

    this.employeeIdSubject.next(employeeId);
  }
}
