import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EclassComponent} from './eclass.component';
import {EclassRoutingModule} from "./eclass-routing.module";
import { TreeBoxComponent } from './tree-box/tree-box.component';
import { TableBoxComponent } from './table-box/table-box.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {EclassService} from "./eclass.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        EclassComponent,
        TreeBoxComponent,
        TableBoxComponent,
        SearchBoxComponent,
    ],
    imports: [
        CommonModule,
        EclassRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        EclassService,
    ],
})
export class EclassModule {
}
