import {Component} from '@angular/core';
import {ThemeService} from "./core/services/theme.service";
import {AuthService} from "./core/services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    isDarkTheme: boolean = false;
    isLoggedIn: boolean = false;
    
    constructor(
        private themeService: ThemeService,
        private authService: AuthService,
    ) {
        this.themeService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
            this.isDarkTheme = isDarkTheme;
        })
        this.themeService.checkDarkTheme();
        this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
            this.isLoggedIn = isLoggedIn;
        });
        this.authService.checkIsLoggedIn();
    }
}
