import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageDirective} from '../core/directives/image.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ProductComponent} from '@@app/components/product/product.component';
import {FullSizeProductComponent} from '@@app/components/product/full-size-product.component';
import {CompactProductComponent} from '@@app/components/product/compact-product.component';
import {HttpClientModule} from '@angular/common/http';
import {NumberDirective} from '@@app/core/directives/number.directive';

const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  HttpClientModule
];

const SHARED_DECLARATIONS = [
  ...[
    ProductComponent,
    FullSizeProductComponent,
    CompactProductComponent
  ],
  ...[
    ImageDirective,
    NumberDirective,
  ],
];

@NgModule({
  imports: SHARED_IMPORTS,
  declarations: SHARED_DECLARATIONS,
  exports: [...SHARED_IMPORTS, ...SHARED_DECLARATIONS]
})
export class AppSharedModule {}
