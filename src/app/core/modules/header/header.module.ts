import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderRoutingModule} from './header-routing.module';
import {HeaderComponent} from './header.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        HeaderRoutingModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatButtonModule
    ]
})
export class HeaderModule {
}
