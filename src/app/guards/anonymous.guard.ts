import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

export const anonymousGuard: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  if (inject(AuthService).isAuthenticated()) {
    let currentRoute = state.url;

    let authorizedLandingRouteArray = (typeof ENVIRONMENT.authorizedLandingPage.routerlink === 'string') 
    ? [ENVIRONMENT.authorizedLandingPage.routerlink] 
    : ENVIRONMENT.authorizedLandingPage.routerlink;

    let authorizedLandingRoute = authorizedLandingRouteArray.join('/');

    let shouldRedirect = currentRoute.localeCompare(authorizedLandingRoute) != 0;

    if (shouldRedirect) {
      inject(Router).navigate([ENVIRONMENT.authorizedLandingPage.routerlink]);
    }

    return false;
  }
  return true;
};
