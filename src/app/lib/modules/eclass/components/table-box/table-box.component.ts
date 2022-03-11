import {AfterViewInit, Component, OnInit} from '@angular/core';
import {EclassService} from "../../services/eclass.service";
import {MatTableDataSource} from '@angular/material/table';
import {TableData} from "../../interfaces/eclass.interface";

@Component({
    selector: 'app-table-box',
    templateUrl: './table-box.component.html',
    styleUrls: ['./table-box.component.scss']
})
export class TableBoxComponent implements OnInit, AfterViewInit {
    
    dataSource = new MatTableDataSource<TableData>(this.eclassService.tableData);
    
    // @ViewChild(MatPaginator) paginator: MatPaginator; // = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype)
    
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    
    constructor(
        public eclassService: EclassService
    ) {
        // this.paginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
    }
    
    ngOnInit(): void {
    }
    
}
