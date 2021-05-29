import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {ProductsActions} from '../actions/products.actions';
import {ProductsRestService} from '../../rest/products-rest.service';
import {of} from 'rxjs';

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductsActions.fetchProductList),
    exhaustMap(() => this.productsRestService.getAll$().pipe(
      map(products => ProductsActions.fetchProductsListSuccess({products})),
      catchError(error => of(ProductsActions.fetchProductsListFailed()))
    ))
  ));

  constructor(private actions$: Actions,
              private productsRestService: ProductsRestService) {
  }
}
