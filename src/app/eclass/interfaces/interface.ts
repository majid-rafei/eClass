export enum FieldType {
    String = 's',
    Number = 'n',
    Date = 'd',
}

export enum Eclass {
    CL = 'class',
    PR = 'property',
    VA = 'value',
    UN = 'unit',
    AL = 'all',
}

export enum EclassSh {
    CL = 'cl',
    PR = 'pr',
    VA = 'va',
    UN = 'un',
    AL = 'al',
}

export interface TableData {
    class: string;
    property: string;
    value: number;
    unit: string;
}

export interface Dict {
    c: string;
    q: string;
}

export interface Filters {
    tx: string,
    cl: Dict,
    pr: Dict,
    va: Dict,
    un: Dict,
}

export interface TableNode {
    name: string;
    data: [];
    children: TableNode[];
}

export interface FilterType {
    n: string,
    v: false,
    q: string,
}