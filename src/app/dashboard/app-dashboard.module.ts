import {NgModule} from '@angular/core';
import {ProductsPageComponent} from '@@dashboard/pages/products/products-page.component';
import {AppDashboardRoutingModule} from '@@dashboard/app-dashboard-routing.module';
import {ProductFormPageComponent} from '@@dashboard/pages/product-form/product-form-page.component';
import {AppSharedModule} from '@@shared/shared.module';

@NgModule({
  imports: [
    AppDashboardRoutingModule,
    AppSharedModule
  ],
  declarations: [
    ProductsPageComponent,
    ProductFormPageComponent
  ]
})
export class AppDashboardModule {}
