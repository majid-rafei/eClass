import {Injectable, OnDestroy} from "@angular/core";
import {Router} from '@angular/router';
import {LoginSentInterface} from "../interfaces/auth.interface";
import {ResponseInterface} from "../interfaces/response.interface";
import {HttpResponse} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {HttpService} from "./http.service";
import * as moment from "moment";
import {Subject} from "rxjs";
import {AuthAPIS} from "../app.api";

@Injectable({
    providedIn: "root"
})
export class AuthService implements OnDestroy {
    
    baseUrl = environment.API_BASE;
    static passwordLength: number = 6;
    
    /**
     * _isLoggedIn and _isLoggedIn$ are private properties and their value changes only from within this class.
     * @private
     */
    private _isLoggedIn = new Subject<boolean>();
    isLoggedIn$ = this._isLoggedIn.asObservable();
    
    constructor(
        private http: HttpService,
        private router: Router,
    ) {
    }
    
    ngOnDestroy(): void {
    }
    
    /**
     * Requests a login with user credentials and sets the next value of _isLoggedIn$ Observable.
     * @param loginData
     */
    manageLogin(loginData: LoginSentInterface) {
        return this.http
            .post(loginData, AuthAPIS.AUTHENTICATE, false)
            .then((response: HttpResponse<any>) => {
                const body: ResponseInterface = Object.assign({}, <any>response.body);
                const tkn = body.data.item;
                this._setTokenToLocalStorage(tkn.accessToken, tkn.refreshToken, Number(tkn.expiresIn));
                this._isLoggedIn.next(true);
                this.router.navigate(['/']).then(r => {})
            })
        ;
    }
    
    // /**
    //  * Two methods of getting isLoggedIn variable. One with sync and other with Observable.
    //  */
    // getLoggedIn(): boolean;
    // getLoggedIn(isObservable: boolean): Observable<boolean>;
    // getLoggedIn(isObservable?: boolean): Observable<boolean> | boolean {
    //     console.log('this._isLoggedIn$.value', this._isLoggedIn$.value);
    //     return isObservable ? this._isLoggedIn$.asObservable() : this._isLoggedIn;
    // }
    
    /**
     * Sets token to the local storage
     * @param accessToken
     * @param refreshToken
     * @param expiresIn
     * @private
     */
    private _setTokenToLocalStorage(accessToken: string = '', refreshToken: string = '', expiresIn: number = 0) {
        try {
            localStorage.setItem('access-token', accessToken);
            localStorage.setItem('refresh-token', refreshToken);
            localStorage.setItem('access-token-expires-at', String(moment.now() + expiresIn * 1000));
            return true;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
    
    /**
     * Gets token from local storage.
     * @private
     */
    private _getTokenFromLocalStorage() {
        try {
            return {
                accessToken: localStorage.getItem('access-token'),
                refreshToken: localStorage.getItem('refresh-token'),
                expiresIn: localStorage.getItem('access-token-expires-at')
            };
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
    
    /**
     * Logs out the user and deletes tokens from local storage.
     */
    logout(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                this._setTokenToLocalStorage();
                this._isLoggedIn.next(false);
                alert('Successfully logged out.');
                this.router.navigate(['/']);
                resolve(true);
            } catch (e: any) {
                alert('Error occurred when trying to Logout:' + e.message);
                reject(e);
            }
        })
    }
    
    /**
     * Checks if is logged in.
     */
    checkIsLoggedIn(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                const tkn = this._getTokenFromLocalStorage();
                if (tkn.accessToken && Number(tkn.expiresIn) > moment.now()) {
                    this._isLoggedIn.next(true);
                    resolve(true);
                }
            } catch (e: any) {
                reject(e.message)
            }
        })
    }
}