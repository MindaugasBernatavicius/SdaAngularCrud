import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

// ... as all services, guard service needs to be registered to an injector
@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot, // current route information
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // logic
    const id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      // alert('Incorrect value'); // in real app, would navigate to error page with some message or set message in current page
      this.router.navigate(['/products'], { state: { error: 'Invalid URL parameter: ' + next.url[1].path } });
      return false;
    }
    return true;
  }
}
