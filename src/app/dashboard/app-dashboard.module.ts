import {NgModule} from '@angular/core';
import {ProductsPageComponent} from '@@dashboard/pages/products/products-page.component';
import {AppDashboardRoutingModule} from '@@dashboard/app-dashboard-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProductFormPageComponent} from '@@dashboard/pages/product-form/product-form-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    AppDashboardRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule,
  ],
  declarations: [
    ProductsPageComponent,
    ProductFormPageComponent
  ]
})
export class AppDashboardModule {}
