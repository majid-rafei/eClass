import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        RegisterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        RegisterRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        FlexModule,
        FormsModule,
    ],
})
export class RegisterModule {
}
