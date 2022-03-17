import {Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {HttpResponse} from "@angular/common/http";
import {EclassSh, FieldType, Filters, TableField, TableNode} from "../interfaces/eclass.interface";
import {EclassAPIS} from "../../../../core/app.api";
import {HttpService} from "../../../../core/services/http.service";
import {ResponseInterface} from "../../../../core/interfaces/response.interface";

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
    
    constructor(
        private http: HttpService,
    ) {
        this._getFields();
        this._getDataStructure();
        this.ft = FieldType;
    }
    
    /**
     * Gets structured data from the `${EclassAPIS.GET_STRUCTURED_DATA}` endpoint.
     * @private
     */
    private _getDataStructure(): Promise<any> {
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
        let url = EclassAPIS.GET_STRUCTURED_DATA
            + '?' + filters;
        return this.http
            .get(url)
            .then((response: HttpResponse<any>) => {
                const body: ResponseInterface = Object.assign({}, <any>response.body);
                if (body.done) {
                    this.treeDataSource.data = body.data.items;
                }
                else {
                    alert(body.msg);
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
    
    /**
     * Sets table data by the given node object.
     * @param node
     */
    setTableData(node: TableNode) {
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
    
    /**
     * Gets fields of the all tables of the simple E-Class system
     * @private
     */
    private _getFields() {
        this.http
            .get(EclassAPIS.GET_FIELDS)
            .then((response: HttpResponse<any>) => {
                const body: ResponseInterface = Object.assign({}, <any>response.body);
                if (body.done) {
                    let items = body.data.item;
                    this.clFields = items.cl;
                    this.prFields = items.pr;
                    this.vaFields = items.va;
                    this.unFields = items.un;
                }
                else {
                    alert(body.msg);
                }
            })
    }
    
    /**
     * Searches for the given keyword in the given field.
     */
    search() {
        this._getDataStructure();
    }
    
    /**
     * Gets columns of the field objects.
     * @param fields
     * @private
     */
    private _getTableHeaders(fields: TableField[]): string[] {
        let cols = [];
        for (let field of fields) {
            cols.push(field.col)
        }
        return cols;
    }
    
    /**
     * Is to reset table data.
     * @private
     */
    private _resetTableData() {
        this.tableTitle = '';
        this.tableHeader = [];
        this.tableData = [];
    }
}
