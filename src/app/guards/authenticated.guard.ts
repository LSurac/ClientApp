import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

export const authenticatedGuard: CanActivateFn = (    route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    if (!inject(AuthService).isAuthenticated()) {
      let currentRoute = state.url;

      let anonymousLandingRouteArray = (typeof ENVIRONMENT.anonymousLandingPage.routerlink === 'string') 
      ? [ENVIRONMENT.anonymousLandingPage.routerlink] 
      : ENVIRONMENT.anonymousLandingPage.routerlink;

      let anonymousLandingRoute = anonymousLandingRouteArray.join('/');

      let shouldRedirect = currentRoute.localeCompare(anonymousLandingRoute) != 0;

      if (shouldRedirect) {
        inject(Router).navigate([ENVIRONMENT.anonymousLandingPage.routerlink]);
      }

      return false;
    }
    return true;
};
