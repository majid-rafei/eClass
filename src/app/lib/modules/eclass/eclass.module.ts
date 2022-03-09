import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EclassComponent} from './eclass.component';
import {EclassRoutingModule} from "./eclass-routing.module";
import {TreeBoxComponent} from './components/tree-box/tree-box.component';
import {TableBoxComponent} from './components/table-box/table-box.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {EclassService} from "./services/eclass.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {DaoService} from "./services/dao.service";
import {HttpClientModule} from "@angular/common/http";
import { SearchFieldComponent } from './components/search-field/search-field.component';
import {MatSelectModule} from "@angular/material/select";
import { HeaderBoxComponent } from './components/header-box/header-box.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
    declarations: [
        EclassComponent,
        TreeBoxComponent,
        TableBoxComponent,
        SearchBoxComponent,
        SearchFieldComponent,
        HeaderBoxComponent,
    ],
    imports: [
        CommonModule,
        EclassRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatTreeModule,
        MatIconModule,
        HttpClientModule,
        MatSelectModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatTabsModule,
        MatExpansionModule,
    ],
    providers: [
        EclassService,
        DaoService,
    ],
})
export class EclassModule {
}
