import {createAction, props} from '@ngrx/store';
import {Product} from '../../shared/models/product';

export namespace ProductsActions {
  export const fetchProductList = createAction('[Products] Fetch products');
  export const fetchProductsListSuccess = createAction('[Products] Fetch products success', props<{products: Product[]}>());
  export const fetchProductsListFailed = createAction('[Products] Fetch products failed');
}
