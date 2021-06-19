import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {productsReducer} from './store/reducers/products.reducer';
import {ActionReducerMap} from '@ngrx/store/src/models';
import {EffectsModule} from '@ngrx/effects';
import {AppState} from './shared/models/app-state';
import {ProductsEffects} from './store/effects/products.effects';
import {PRODUCTS_STATE_STORE_KEY} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

const reducers: ActionReducerMap<AppState> = {
  [PRODUCTS_STATE_STORE_KEY]: productsReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Furnicom',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([ProductsEffects])
  ]
})
export class AppStateModule {}
