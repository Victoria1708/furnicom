import {ProductComponent} from '@@app/components/product/product.component';
import {AppDropdownModule} from '@@app/widgets/dropdown/dropdown.module';
import {AppRangeSliderModule} from '@@app/widgets/range-slider/range-slider.module';
import {AppSectionModule} from '@@app/widgets/section/section.module';
import {ProductsPageComponent} from '@@products/components/products-page/products-page.component';
import {AppSharedModule} from '@@shared/shared.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    AppSharedModule,
    AppDropdownModule,
    AppSectionModule,
    AppRangeSliderModule
  ],
  declarations: [
    ProductsPageComponent,
    ProductComponent
  ]
})
export class AppProductsPageModule {}
