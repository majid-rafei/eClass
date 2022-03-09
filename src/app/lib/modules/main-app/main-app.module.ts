import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainAppComponent} from './main-app.component';
import {RouterModule} from "@angular/router";
import {MainAppRoutingModule} from "./main-app-routing.module";


@NgModule({
    declarations: [
        MainAppComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MainAppRoutingModule
    ],
    bootstrap: [
        MainAppComponent,
    ],
})
export class MainAppModule {
}
