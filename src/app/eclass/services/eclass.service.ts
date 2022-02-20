import {Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment';
import {FieldType} from "../interfaces/interface";

export interface TableData {
    category: string;
    property: string;
    value: number;
    unit: string;
}

export interface Dict {
    v: boolean;
    q: string;
}

export interface Filters {
    text: string,
    fields: [],
}

interface TableNode {
    name: string;
    data: [];
    children: TableNode[];
}

export interface FilterType {
    n: string,
    v: false,
    q: string,
}

@Injectable()
export class EclassService {
    
    tableTitle: string = 'sample-table';
    tableHeader: string[] = ['test1', 'test2'];
    tableData: any[] = [
        {'test1': 1, 'test2': 2},
        {'test1': 3, 'test2': 4},
    ];
    ft = FieldType;
    
    clFields = [];
    prFields = [];
    vaFields = [];
    unFields = [];
    
    filters: any = {
        text: '',
        cl: {n: 'Class', v: false, q: ''},
        pr: {n: 'Property', v: false, q: ''},
        va: {n: 'Value', v: false, q: ''},
        un: {n: 'Unit', v: false, q: ''},
    };
    
    treeControl = new NestedTreeControl<TableNode>(node => node.children);
    treeDataSource = new MatTreeNestedDataSource<TableNode>();
    hasChild = (_: number, node: TableNode) => !!node.children && node.children.length > 0;
    
    baseUrl = environment.API_BASE;
    
    constructor(
        private http: HttpClient,
    ) {
        this._getFields();
        this._getDataStructure();
        this._initializeFilters();
        this.ft = FieldType;
    }
    
    private _getDataStructure() {
        return this.http
            .get(
                this.baseUrl + 'eclass/getDataStructure',
                {
                    responseType: "json",
                    observe: 'response'
                }
            )
            .subscribe((resp: any) => {
                this.treeDataSource = resp.body;
            });
    }
    
    printFilters(checked: any) {
        console.log(checked);
        console.log(this.filters)
    }
    
    importCsv() {
        return true;
    }
    
    filterTable($event: any) {
        console.log($event);
    }
    
    private _initializeFilters() {
        this.filters.text = '';
        this.filters.cl = {n: 'Class', v: false, q: ''}
        this.filters.pr = {n: 'Property', v: false, q: ''}
        this.filters.va = {n: 'Value', v: false, q: ''}
        this.filters.un = {n: 'Unit', v: false, q: ''}
        return;
    }
    
    setFilter($event: any, type: string) {
        this.filters[type] = {
            col: $event.col,
            q: $event.q,
        }
    }
    
    private _getFields() {
        this.http.get(this.baseUrl + 'eclass/getFields')
            .subscribe((resp: any) => {
                this.clFields = resp.cl;
                this.prFields = resp.pr;
                this.vaFields = resp.va;
                this.unFields = resp.un;
            })
    }
}
