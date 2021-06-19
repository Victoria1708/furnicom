import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageDirective} from './directives/image.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ProductComponent} from '@@app/components/product/product.component';
import {FullSizeProductComponent} from '@@app/components/product/full-size-product.component';
import {CompactProductComponent} from '@@app/components/product/compact-product.component';

const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule
];

const SHARED_DECLARATIONS = [
  ...[
    ProductComponent,
    FullSizeProductComponent,
    CompactProductComponent
  ],
  ...[
    ImageDirective
  ],
];

@NgModule({
  imports: SHARED_IMPORTS,
  declarations: SHARED_DECLARATIONS,
  exports: [...SHARED_IMPORTS, ...SHARED_DECLARATIONS]
})
export class AppSharedModule {}
