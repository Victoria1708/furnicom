import {Product} from './product';

export interface ProductsState {
  loading: boolean;
  products: Product[];
}
