import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EclassComponent} from './eclass.component';
import {EclassRoutingModule} from "./eclass-routing.module";


@NgModule({
    declarations: [
        EclassComponent
    ],
    imports: [
        CommonModule,
        EclassRoutingModule,
    ]
})
export class EclassModule {
}
