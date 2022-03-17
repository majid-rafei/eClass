import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LoginGuard implements CanActivate {
    
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
    }
    
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLoggedIn = this.authService.checkIsLoggedIn();
        if (! isLoggedIn || typeof isLoggedIn == "string") {
            const returnUrl = state.url;
            alert(typeof isLoggedIn == "string" ? isLoggedIn : 'You are not logged in, please login first.');
            return this.router.createUrlTree(['/auth/login'], {
                queryParams: {
                    returnUrl: returnUrl,
                }
            });
            return false;
        }
        return true;
    }
}