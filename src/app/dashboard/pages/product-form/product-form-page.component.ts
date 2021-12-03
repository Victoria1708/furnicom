import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DashboardNavigationService} from '@@app/router/services/dashboard-navigation.service';
import {DashboardProductRestService} from '@@dashboard/rest/dashboard-product-rest.service';
import {ProductsConfig} from '@@dashboard/config/products.config';
import {Form} from '@@app/forms/models/forms';
import {ProductForm} from '@@dashboard/models/product-form';
import {ProductFormService} from '@@dashboard/services/product-form.service';

@Component({
  templateUrl: 'product-form-page.component.html',
  styleUrls: ['product-form-page.component.scss'],
  providers: [ProductFormService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormPageComponent implements OnInit {

  @ViewChild('input') inputElemRen: ElementRef<HTMLInputElement>;
  public productForm: Form<ProductForm>;
  public imageFiles: File[];

  constructor(private dashboardProductRestService: DashboardProductRestService,
              private dashboardNavigationService: DashboardNavigationService,
              private productFormService: ProductFormService,
              private cdr: ChangeDetectorRef) {
    this.imageFiles = [];
  }

  ngOnInit(): void {
    this.productFormService.init();
    this.productForm = this.productFormService.form;
  }

  onFilesSelected(files: File[]): Promise<void> {
    if (!files.length) {
      return;
    }
    this.imageFiles = Array.prototype.slice.apply(files, [0, ProductsConfig.MAX_GALLERY_SIZE]);
    this.productForm.controls.images.setValue(files);
    this.cdr.detectChanges();
  }

  onSubmit(): any {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const formData: FormData = this.productFormService.getFormData();
    this.dashboardProductRestService.create$(formData).subscribe(() => {
      this.dashboardNavigationService.goToProductsList();
    });
  }
}
