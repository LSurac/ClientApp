import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ENVIRONMENT } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {
  private authService: AuthService;
  private router: Router;
  private authenticated: boolean = false;
  private authenticationSubscription: Subscription | undefined;

  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);

    if (!this.authenticationSubscription) {
      this.authenticationSubscription = this.authService.authenticatedGet().subscribe(
        (authenticated) => {
          this.authenticated = authenticated;
        }
      );
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authenticated) {
      let currentRoute = state.url;

      let authorizedLandingRouteArray = (typeof ENVIRONMENT.authorizedLandingPage.routerlink === 'string') 
      ? [ENVIRONMENT.authorizedLandingPage.routerlink] 
      : ENVIRONMENT.authorizedLandingPage.routerlink;

      let authorizedLandingRoute = authorizedLandingRouteArray.join('/');

      let shouldRedirect = currentRoute.localeCompare(authorizedLandingRoute) != 0;

      if (shouldRedirect) {
        this.router.navigate([ENVIRONMENT.authorizedLandingPage.routerlink]);
      }

      return false;
    }
    return true;
  }
}
