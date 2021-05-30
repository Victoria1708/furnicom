import {SliderRange} from '@@app/widgets/range-slider/models/slider-range';
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

  public maxRangeValue: number;
  public minRangeValue: number;
  public range: SliderRange;
  public products$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.maxRangeValue = 10000;
    this.minRangeValue = 0;
    this.range = {from: this.minRangeValue, to: this.maxRangeValue};
    this.products$ = store.pipe(select(ProductsSelectors.products));
    this.store.dispatch(ProductsActions.fetchProductList());
  }
}
