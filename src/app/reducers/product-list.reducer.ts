import { createSelector } from '@ngrx/store';
import { FetchProducts, FetchProductsFailure, FetchProductsSuccess, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/product-list.actions';
import { IProduct } from '../products/models/product.interface';
import { State } from './index';

export type Actions =
    FetchProducts |
    FetchProductsSuccess |
    FetchProductsFailure;

export interface ProductListState {
    products: Array<IProduct>;
}

export const initialState: ProductListState = {
    products: []
};

export function reducer(state: ProductListState = initialState, action: Actions): ProductListState {
    let updatedState: ProductListState = state;

    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            updatedState = { ...state, products: action.payload };
            break;
        case FETCH_PRODUCTS_FAILURE:
            updatedState = { ...state, products: initialState.products };
            break;
    }

    return updatedState;
}

export const productListFeature = (state: State) => state.productListState;

export const productsSelector = createSelector(productListFeature, (state: ProductListState) => state.products);
