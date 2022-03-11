import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";


@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthRoutingModule,
    ],
    providers: [
    ]
})
export class AuthModule {
}
