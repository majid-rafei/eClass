import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {FieldType} from "../../interfaces/interface";

@Component({
    selector: 'app-search-field',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {
    
    @Input() fields: any;
    @Input() type: string = '';
    @Output() selectedField: any = new EventEmitter();
    
    allField = {
        col: 'all',
        type: FieldType.String,
    }
    
    ft = FieldType;
    
    constructor() {
    }
    
    ngOnInit(): void {
    }
    
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.selectedField = this.allField;
        }, 50)
    }
    
}
