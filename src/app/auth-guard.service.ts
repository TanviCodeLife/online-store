import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.map(user => {
      if (user) { return true; }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
      // redirect to login and navigate user into the original protected route after they login
      return false;
    });
  }

}
