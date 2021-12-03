import {NgModule} from '@angular/core';
import {ProductsPageComponent} from '@@dashboard/pages/products/products-page.component';
import {AppDashboardRoutingModule} from '@@dashboard/app-dashboard-routing.module';
import {ProductFormPageComponent} from '@@dashboard/pages/product-form/product-form-page.component';
import {AppSharedModule} from '@@shared/shared.module';
import {ProductGalleryComponent} from '@@dashboard/components/product-galary/product-gallery.component';
import {AppFormsModule} from '@@app/forms/app-forms.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  imports: [
    AppDashboardRoutingModule,
    AppSharedModule,
    AppFormsModule,
    DragDropModule,
    NgxMaskModule.forChild()
  ],
  declarations: [
    ProductsPageComponent,
    ProductFormPageComponent,
    ProductGalleryComponent
  ]
})
export class AppDashboardModule {}
