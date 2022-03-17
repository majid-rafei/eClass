import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    
    private _isDarkTheme = new Subject<boolean>();
    isDarkTheme$ = this._isDarkTheme.asObservable();
    
    /**
     * Sets dark theme.
     * @param isDarkTheme
     */
    setDarkTheme(isDarkTheme: boolean): void {
        this._isDarkTheme.next(isDarkTheme);
        this._setThemeToLocalStorage(isDarkTheme);
    }
    
    /**
     * Sets theme to the local storage
     * @param isDarkTheme
     * @private
     */
    private _setThemeToLocalStorage(isDarkTheme: boolean) {
        try {
            localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
            return true;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
    
    /**
     * Checks if theme is dark
     */
    checkDarkTheme(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                const isDarkTheme: string = this._getThemeFromLocalStorage();
                this._isDarkTheme.next(isDarkTheme == 'dark');
                resolve(true);
            } catch (e: any) {
                reject(e.message)
            }
        })
    }
    
    /**
     * Gets theme from local storage
     * @private
     */
    private _getThemeFromLocalStorage(): string {
        try {
            return localStorage.getItem('theme') ?? '';
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}