import { HttpParams } from "@angular/common/http";

export declare type Direction = 'asc' | 'desc' | '';

export class Order {
    property: string;
    direction: Direction;

    constructor(property: string, direction?: Direction) {
        this.property = property;
        if (direction) {
            this.direction = direction;
        } else {
            this.direction = 'asc';
        }
    }
}

export class Sort {

    orders: Order[];

    constructor(orders: Order[]) {
        this.orders = orders;
    }
}

/* interface Dictionary<T> {
    [Key: string]: T;
} */

export class Pageable {
    pageNumber: number;
    pageSize: number;
    sort?: Sort;

    constructor(pageNumber?: number, pageSize?: number, sort?: Sort) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.sort = sort;
    }
}

export class RequestParams {

    private pageable?: Pageable;
    //Params?: Dictionary<string> = {};
    private params?: HttpParams;

    constructor(params?: HttpParams, pageable?: Pageable) {
        this.params = params;
        this.pageable = pageable;
    }

    getHttpParams(): HttpParams {

        if (!this.params) {
            this.params = new HttpParams();
        }

        if (this.pageable) {
            this.params = this.params.set('page', this.pageable.pageNumber.toString())
            this.params = this.params.set('size', this.pageable.pageSize.toString())

            if (this.pageable.sort) {
                this.pageable.sort.orders.forEach(
                    order => {
                        if (order.property) {
                            this.params = this.params.set('sort', `${order.property},${order.direction}`);
                        }
                    }
                )
            }
        }

        return this.params;
    }
}

 /* export const createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach(val => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
}; */

 /*   let options: HttpParams = new HttpParams();

        let doSort: string = "";
    
        if (sort !== '') {
          doSort = sort;
          if (sortDirection !== '') {
            doSort += "," + sortDirection;
          }
        }
        options = options.set('page', pageNumber.toString())
        options = options.set('size', pageSize.toString())
        options = options.set('sort', doSort) */