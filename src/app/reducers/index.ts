import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromProductList from './product-list.reducer';

export interface State {
  productListState: fromProductList.ProductListState;
}

export const initialState: State = {
  productListState: fromProductList.initialState
};

export const reducers: ActionReducerMap<State> = {
  productListState: fromProductList.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
