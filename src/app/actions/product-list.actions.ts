import { Action } from '@ngrx/store';

import { IProduct } from '../products/models/product.interface';

export const FETCH_PRODUCTS = '[product-list] FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = '[product-list] FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = '[product-list] FETCH_PRODUCTS_FAILURE';

export class FetchProducts implements Action {
    readonly type = FETCH_PRODUCTS;

    constructor() {}
}

export class FetchProductsSuccess implements Action {
    readonly type = FETCH_PRODUCTS_SUCCESS;

    constructor(public payload: Array<IProduct>) {}
}

export class FetchProductsFailure implements Action {
    readonly type = FETCH_PRODUCTS_FAILURE;

    constructor(payload: any) {}
}
