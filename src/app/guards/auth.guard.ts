import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afa: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.afa.authState.pipe(
      map((user) => {
        if (state.url === '/') {
          if (user) {
            console.log('tried to login in "/", navigate to "/customers"');
            return this.router.parseUrl('/customers');
          } else {
            console.log('tried login to "/" - OK');
            return true;
          }
        }

        if (user) {
          console.log('user is logged - OK');
          return true;
        }

        console.log('user is not allowed');
        return this.router.parseUrl('/');
      }),
      take(1)
    );
  }
}
