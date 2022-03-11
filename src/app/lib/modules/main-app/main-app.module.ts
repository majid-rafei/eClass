import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainAppComponent} from './main-app.component';
import {RouterModule} from "@angular/router";
import {MainAppRoutingModule} from "./main-app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        MainAppComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MainAppRoutingModule,
        MatToolbarModule,
        MatButtonModule
    ],
    bootstrap: [
        MainAppComponent,
    ],
})
export class MainAppModule {
}
