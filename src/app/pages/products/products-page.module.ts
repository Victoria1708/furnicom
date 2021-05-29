import {NgModule} from '@angular/core';
import {AppSharedModule} from '@@shared/shared.module';
import {ProductsPageComponent} from '@@products/components/products-page/products-page.component';
import {AppDropdownModule} from '@@app/widgets/dropdown/dropdown.module';
import {ProductComponent} from '@@app/components/product/product.component';
import {AppSectionModule} from '@@app/widgets/section/section.module';

@NgModule({
  imports: [
    AppSharedModule,
    AppDropdownModule,
    AppSectionModule
  ],
  declarations: [
    ProductsPageComponent,
    ProductComponent
  ]
})
export class AppProductsPageModule {}
