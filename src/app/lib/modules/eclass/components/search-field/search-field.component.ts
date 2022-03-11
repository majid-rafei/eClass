import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {FieldType} from "../../interfaces/eclass.interface";

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {
    
    @Input() fields: any;
    @Input() type: string = '';
    @Output() searchData: any = new EventEmitter();
    
    selectedField: any;
    allField: any = {
        col: 'all',
        type: FieldType.String,
    };
    
    ft = FieldType;
    q: string = '';
    
    constructor() {
        this.selectedField = this.allField;
    }
    
    ngOnInit(): void {
    }
    
    ngAfterViewInit(): void {
    }
    
    emitSelectedField($event: any) {
        let e = {
            c: this.selectedField.col,
            q: this.q,
        }
        this.searchData.emit(e);
    }
}
