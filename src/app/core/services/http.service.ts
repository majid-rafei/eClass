import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {lastValueFrom, Observable, retry, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    baseUrl = environment.API_BASE;
    
    constructor(
        private http: HttpClient,
    ) {
    }
    
    /**
     * Is the GET method of the HttpClient.
     * @param url
     * @param withToken
     */
    public get(url: string, withToken: boolean = true): Promise<any> {
        const _url: string = this.baseUrl + url;
        let _headers: HttpHeaders = new HttpHeaders();
        _headers.set('Content-Type', 'application/json');
        if (withToken) {
            const _token = async () => await this._getTokenFromLocalStorage();
            _headers.set('Authorization', 'Bearer ' + _token);
        }
        const _httpOptions: any = {
            _headers,
            observe: 'response',
        }
        const resp$ = this.http
            .get(_url, _httpOptions)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this._handleError)
            );
        return lastValueFrom(resp$);
    }
    
    /**
     * Is the POST method of the HttpClient.
     * @param body
     * @param url
     * @param withToken
     */
    public post(url: string, body: any, withToken: boolean = true): Promise<any> {
        const _url: string = this.baseUrl + url;
        let _headers: HttpHeaders = new HttpHeaders();
        _headers.set('Content-Type', 'application/json');
        if (withToken) {
            const _token = async () => await this._getTokenFromLocalStorage();
            _headers.set('Authorization', 'Bearer ' + _token);
        }
        const _httpOptions: any = {
            _headers,
            observe: 'response',
        }
        const resp$ = this.http
            .post(_url, body, _httpOptions)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this._handleError)
            );
        return lastValueFrom(resp$);
    }
    
    /**
     * To catch errors of the http request.
     * @param error
     * @private
     */
    private _handleError(error: HttpErrorResponse) {
        let msg: string = '';
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            msg = 'An error occurred:' + error.error;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            msg = `Backend returned code ${error.status}`;
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error(msg));
    }
    
    /**
     * Gets token from local storage.
     * @private
     */
    private async _getTokenFromLocalStorage(): Promise<string> {
        const token = await localStorage.getItem('access-token');
        return new Promise((resolve, reject) => {
            if (token) {
                resolve(token);
            }
            reject('Error getting token from local storage');
        })
    }
}