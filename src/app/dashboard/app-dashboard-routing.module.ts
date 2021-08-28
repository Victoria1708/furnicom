import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from '@@dashboard/pages/products/products-page.component';
import {ProductFormPageComponent} from '@@dashboard/pages/product-form/product-form-page.component';

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  {path: 'products/create', component: ProductFormPageComponent},
  {path: 'products/edit/:id', component: ProductFormPageComponent},
  {path: '**', redirectTo: '/dashboard/products'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDashboardRoutingModule {}
