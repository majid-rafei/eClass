import {Component, Input, OnInit} from '@angular/core';
import {DaoService} from "../../services/dao.service";
import {ThemeService} from "../../../../../core/services/theme.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-header-box',
    templateUrl: './header-box.component.html',
    styleUrls: ['./header-box.component.scss']
})
export class HeaderBoxComponent implements OnInit {
    
    @Input() pageTitle: string = '';
    isDarkTheme: Observable<boolean>;
    
    constructor(
        public daoService: DaoService,
        public themeService: ThemeService,
    ) {
        this.isDarkTheme = this.themeService.isDarkTheme;
    }
    
    ngOnInit(): void {
        // this.isDarkTheme = this.themeService.isDarkTheme;
    }
    
    toggleDarkTheme(checked: boolean) {
        this.themeService.setDarkTheme(checked);
    }
}
