import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ProductService } from '../products/services/product.service';
import { FETCH_PRODUCTS, FetchProductsSuccess, FetchProductsFailure } from '../actions/product-list.actions';
import { of } from 'rxjs';

@Injectable()
export class ProductListEffect {
    fetchProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FETCH_PRODUCTS),
            tap(result => { console.log('effect: FETCH_PRODUCTS'); }),
            switchMap(action =>
                this.productService.getProducts()
                    .pipe(
                        map(result => new FetchProductsSuccess(result)),
                        catchError(() => of(new FetchProductsFailure('Error fetching products')))
                    )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }
}
