import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '@@app/models/app-state';
import {ProductsSelectors} from '@@app/store/selectors/products.selectors';
import {ProductsActions} from '@@app/store/actions/products.actions';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  templateUrl: 'products-page.component.html',
  styleUrls: ['products-page.component.scss']
})
export class ProductsPageComponent {

  public form: FormGroup;
  public products$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.products$ = store.pipe(select(ProductsSelectors.products));
    this.store.dispatch(ProductsActions.fetchProductList());
    this.form = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null)
    });
  }
}
