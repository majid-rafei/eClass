import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, retry, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpService {
    baseUrl = environment.API_BASE;
    
    constructor(
        private http: HttpClient,
    ) {
    }
    
    /**
     * Is the GET method of the HttpClient.
     * @param params
     * @param url
     * @param withToken
     */
    get(params: any, url: string, withToken: boolean = true): Observable<any> {
        let _params: string;
        try {
            _params = JSON.parse(params);
        }
        catch (error) {
            throw new Error('Can not parse params to JSON');
        }
        const _url: string = this.baseUrl + url + _params;
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
        return this.http
            .get(_url, _httpOptions)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this._handleError)
            );
    }
    
    /**
     * Is the POST method of the HttpClient.
     * @param body
     * @param url
     * @param withToken
     */
    post(body: any, url: string, withToken: boolean = true): Observable<any> {
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
        return this.http
            .post(_url, body, _httpOptions)
            .pipe(
                retry(1), // retry a failed request up to 1 times
                catchError(this._handleError)
            );
    }
    
    /**
     * To catch errors of the http request.
     * @param error
     * @private
     */
    private _handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
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