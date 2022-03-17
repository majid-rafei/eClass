import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    
    isDarkTheme: boolean = false;
    isLoggedIn: boolean = false;
    
    constructor(
        private themeService: ThemeService,
        private authService: AuthService,
    ) {
        this.themeService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
            this.isDarkTheme = isDarkTheme;
        });
        this.authService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
            this.isLoggedIn = isLoggedIn;
        });
    }
    
    ngOnInit(): void {
    }
    
    /**
     * Toggles theme.
     * @param checked
     */
    toggleDarkTheme(checked: boolean) {
        this.themeService.setDarkTheme(checked);
    }
    
    /**
     * Logs out the user.
     */
    logout() {
        this.authService.logout()
            .catch((error: any) => {
                console.log('Error occurred when trying to Logout:' + error.message);
            });
    }
}
