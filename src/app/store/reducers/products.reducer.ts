import {Action, createReducer, on} from '@ngrx/store';
import {ProductsActions} from '../actions/products.actions';
import {ProductsState} from '../../shared/models/products-state';

const initialState: ProductsState = {
  loading: false,
  products: []
};

const _productsReducer = createReducer(
  initialState,
  on(ProductsActions.fetchProductList, (state) => ({...state, loading: true})),
  on(ProductsActions.fetchProductsListSuccess, (state, {products}) => ({...state, products, loading: false})),
  on(ProductsActions.fetchProductsListFailed, (state) => ({...state, loading: false}))
);

export function productsReducer(state: ProductsState, action: Action): ProductsState {
  return _productsReducer(state, action);
}



