import {Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment';
import {EclassSh, FieldType, Filters, TableField, TableNode} from "../interfaces/eclass.interface";

@Injectable()
export class EclassService {
    
    tableTitle: string = '';
    tableHeader: string[] = [];
    tableData: any[] = [];
    ft = FieldType;
    /**
     * These fields contain table column names for searching and filtering
     */
    clFields: TableField[] = [];
    prFields: TableField[] = [];
    vaFields: TableField[] = [];
    unFields: TableField[] = [];
    /**
     * Is for filters.
     */
    filters: Filters = {
        'tx': '',
        'cl': {c: '', q: ''},
        'pr': {c: '', q: ''},
        'va': {c: '', q: ''},
        'un': {c: '', q: ''},
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
        this.ft = FieldType;
    }
    
    private _getDataStructure() {
        this._resetTableData();
        let filters =
            `clc=${this.filters.cl.c}&`
            +`clq=${this.filters.cl.q}&`
            +`prc=${this.filters.pr.c}&`
            +`prq=${this.filters.pr.q}&`
            +`vac=${this.filters.va.c}&`
            +`vaq=${this.filters.va.q}&`
            +`unc=${this.filters.un.c}&`
            +`unq=${this.filters.un.q}`
        ;
        /**
         * TODO: Filters should be prepared before adding as param to the GET request.
         */
        let url = this.baseUrl + 'eclass/getStructuredData'
            + '?' + filters;
        return this.http
            .get(url, {
                    responseType: "json",
                    observe: 'response'
                }
            )
            .subscribe((resp: any) => {
                if (resp.body.done) {
                    this.treeDataSource = resp.body.data.items;
                }
                else {
                    alert(resp.body.msg);
                }
            });
    }
    
    printFilters(checked: any) {
        console.log(checked);
        console.log(this.filters)
    }
    
    importCsv() {
        return true;
    }
    
    filterTable(node: TableNode) {
        this.tableData = Array.of(node.data);
        this.tableTitle = node.name;
        switch (node.type.toLowerCase()) {
            case EclassSh.CL:
                this.tableHeader = this._getTableHeaders(this.clFields);
                break;
            case EclassSh.PR:
                this.tableHeader = this._getTableHeaders(this.prFields);
                break;
            case EclassSh.VA:
                this.tableHeader = this._getTableHeaders(this.vaFields);
                break;
            case EclassSh.UN:
                this.tableHeader = this._getTableHeaders(this.unFields);
                break;
        }
    }
    
    /**
     * TODO: It is strange that here this.filters[_type] doesnt work! Needs considerations.
     * @param $event
     * @param _type
     */
    setFilter($event: any, _type: string) {
        switch (_type.toLowerCase()) {
            case EclassSh.AL:
                this.filters['tx'] = $event.q;
                break;
            case EclassSh.CL:
                this.filters[EclassSh.CL] = {c: $event.c, q: $event.q};
                break;
            case EclassSh.PR:
                this.filters[EclassSh.PR] = {c: $event.c, q: $event.q};
                break;
            case EclassSh.VA:
                this.filters[EclassSh.VA] = {c: $event.c, q: $event.q};
                break;
            case EclassSh.UN:
                this.filters[EclassSh.UN] = {c: $event.c, q: $event.q};
                break;
        }
    }
    
    private _getFields() {
        this.http
            .get(
                this.baseUrl + 'eclass/getFields',{
                responseType: "json",
                observe: 'response'
            })
            .subscribe((resp: any) => {
                if (resp.body.done) {
                    let items = resp.body.data.item;
                    this.clFields = items.cl;
                    this.prFields = items.pr;
                    this.vaFields = items.va;
                    this.unFields = items.un;
                }
                else {
                    alert(resp.body.msg);
                }
            })
    }
    
    search() {
        this._getDataStructure();
    }
    
    private _getTableHeaders(fields: TableField[]): string[] {
        let cols = [];
        for (let field of fields) {
            cols.push(field.col)
        }
        return cols;
    }
    
    private _resetTableData() {
        this.tableTitle = '';
        this.tableHeader = [];
        this.tableData = [];
    }
}
