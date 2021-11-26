import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Validators} from '@angular/forms';
import {DashboardNavigationService} from '@@app/router/services/dashboard-navigation.service';
import {DashboardProductRestService} from '@@dashboard/rest/dashboard-product-rest.service';
import {Product} from '@@shared/models/product';
import {ProductConverter} from '@@dashboard/converters/product.converter';
import {ProductsConfig} from '@@dashboard/config/products.config';
import {FieldControl, Form} from '@@app/forms/models/forms';
import {CustomValidators} from '@@app/forms/validators';
import {NewProductForm} from '@@dashboard/models/new-product-form';

@Component({
  templateUrl: 'product-form-page.component.html',
  styleUrls: ['product-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormPageComponent implements OnInit {

  @ViewChild('input') inputElemRen: ElementRef<HTMLInputElement>;
  public productForm: Form<NewProductForm>;
  public imageFiles: File[];

  constructor(private dashboardProductRestService: DashboardProductRestService,
              private dashboardNavigationService: DashboardNavigationService,
              private cdr: ChangeDetectorRef) {
    this.imageFiles = [];
  }

  ngOnInit(): void {
    this.initForm();
  }

  onFilesSelected(files: File[]): Promise<void> {
    if (!files.length) {
      return;
    }
    this.imageFiles = Array.prototype.slice.apply(files, [0, ProductsConfig.MAX_GALLERY_SIZE]);
    this.productForm.controls.images.setValue(files);
    this.cdr.detectChanges();
  }

  initForm(): void {
    this.productForm = new Form<NewProductForm>({
      name: new FieldControl(null, [Validators.required, Validators.minLength(3)]),
      price: new FieldControl(null, [
        Validators.required,
        CustomValidators.floatNumber({precision: 3}),
        Validators.min(0.01)
      ]),
      images: new FieldControl(null, Validators.required)
    });
  }

  onSubmit(): any {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const fv = this.productForm.getRawValue();
    const product: Product = ProductConverter.toProduct(fv);

    const formData: FormData = new FormData();
    formData.append('name', product.name);
    formData.append('price', `${product.price}`);
    Array.from(fv.images).forEach((file: Blob) => {
      formData.append('images', file);
    });

    this.dashboardProductRestService.create$(formData).subscribe(() => {
      this.dashboardNavigationService.goToProductsList();
    });
  }
}
