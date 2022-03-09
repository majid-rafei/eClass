import {Component} from '@angular/core';
import {ThemeService} from "./core/services/theme.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isDarkTheme: Observable<boolean>;
    constructor(
        public themeService: ThemeService
    ) {
        this.isDarkTheme = this.themeService.isDarkTheme;
    }
}
