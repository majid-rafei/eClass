export interface ResponseInterface {
    done: boolean;
    msg: string;
    data: ResponseDataInterface;
}

export interface ResponseDataInterface {
    item: any;
    items: any[];
}