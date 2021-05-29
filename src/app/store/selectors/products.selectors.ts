import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../models/app-state';
import {ProductsState} from '../../models/products-state';
import {PRODUCTS_STATE_STORE_KEY} from '../index';

export namespace ProductsSelectors {
  export const state = createFeatureSelector<AppState, ProductsState>(PRODUCTS_STATE_STORE_KEY);
  export const products = createSelector(state, (s: ProductsState) => s.products);
  export const loading = createSelector(state, (s: ProductsState) => s.loading);
}
