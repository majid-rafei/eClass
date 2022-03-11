import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        LoginRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FlexModule,
        FormsModule,
    ],
})
export class LoginModule {
}
