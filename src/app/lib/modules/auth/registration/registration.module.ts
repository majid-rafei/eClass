import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegistrationComponent} from "./registration.component";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
    declarations: [
        RegistrationComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        RegistrationRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        FlexModule,
    ],
})
export class RegistrationModule {
}
