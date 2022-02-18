import {Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";

export interface TableData {
    category: string;
    property: string;
    value: number;
    unit: string;
}

export interface Columns {
    name: string;
    value: boolean;
}

export interface Filters {
    text: string,
    fields: Columns[],
}

const TableData: TableData[] = [
    {category: '1', property: 'Hydrogen', value: 1.0079, unit: 'H'},
    {category: '2', property: 'Helium', value: 4.0026, unit: 'He'},
    {category: '3', property: 'Lithium', value: 6.941, unit: 'Li'},
    {category: '4', property: 'Beryllium', value: 9.0122, unit: 'Be'},
    {category: '5', property: 'Boron', value: 10.811, unit: 'B'},
    {category: '6', property: 'Carbon', value: 12.0107, unit: 'C'},
    {category: '7', property: 'Nitrogen', value: 14.0067, unit: 'N'},
    {category: '8', property: 'Oxygen', value: 15.9994, unit: 'O'},
    {category: '9', property: 'Fluorine', value: 18.9984, unit: 'F'},
    {category: '10', property: 'Neon', value: 20.1797, unit: 'Ne'},
    {category: '1', property: 'Hydrogen', value: 1.0079, unit: 'H'},
    {category: '2', property: 'Helium', value: 4.0026, unit: 'He'},
    {category: '3', property: 'Lithium', value: 6.941, unit: 'Li'},
    {category: '4', property: 'Beryllium', value: 9.0122, unit: 'Be'},
    {category: '5', property: 'Boron', value: 10.811, unit: 'B'},
    {category: '6', property: 'Carbon', value: 12.0107, unit: 'C'},
    {category: '7', property: 'Nitrogen', value: 14.0067, unit: 'N'},
    {category: '8', property: 'Oxygen', value: 15.9994, unit: 'O'},
    {category: '9', property: 'Fluorine', value: 18.9984, unit: 'F'},
    {category: '10', property: 'Neon', value: 20.1797, unit: 'Ne'},
];

interface TableNode {
    name: string;
    data: [];
    children: TableNode[];
}

const TREE_DATA: TableNode[] = [
    {
        name: 'class 1',
        data: [],
        children: [
            {name: 'prop 1', data: [], children: [{name: 'uni 1', data: [], children: []}, {name: 'val 1', data: [], children: []}]},
            {name: 'prop 2', data: [], children: [{name: 'uni 2', data: [], children: []}, {name: 'val 2', data: [], children: []}]},
            {name: 'prop 3', data: [], children: [{name: 'uni 3', data: [], children: []}, {name: 'val 3', data: [], children: []}]},
            {name: 'prop 4', data: [], children: [{name: 'uni 4', data: [], children: []}, {name: 'val 4', data: [], children: []}]},
        ],
    },
    {
        name: 'class 2',
        data: [],
        children: [
            {name: 'prop 1', data: [], children: [{name: 'uni 1', data: [], children: []}, {name: 'val 1', data: [], children: []}]},
            {name: 'prop 2', data: [], children: [{name: 'uni 2', data: [], children: []}, {name: 'val 2', data: [], children: []}]},
            {name: 'prop 3', data: [], children: [{name: 'uni 3', data: [], children: []}, {name: 'val 3', data: [], children: []}]},
            {name: 'prop 4', data: [], children: [{name: 'uni 4', data: [], children: []}, {name: 'val 4', data: [], children: []}]},
        ],
    },
];

@Injectable()
export class EclassService {
    
    tableTitle: string = 'sample-table';
    tableHeader: string[] = ['category', 'property', 'value', 'unit'];
    tableData = TableData;
    filters: Filters = {
        text: '',
        fields: [
            {name: 'Category', value: false},
            {name: 'property', value: false},
            {name: 'Unit', value: false},
            {name: 'Value', value: false},
        ],
    };
    
    treeControl = new NestedTreeControl<TableNode>(node => node.children);
    treeDataSource = new MatTreeNestedDataSource<TableNode>();
    hasChild = (_: number, node: TableNode) => !!node.children && node.children.length > 0;
    
    constructor() {
        this.treeDataSource.data = TREE_DATA;
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
}
