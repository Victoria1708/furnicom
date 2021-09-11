import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DashboardNavigationService} from '@@app/router/services/dashboard-navigation.service';
import {DashboardProductRestService} from '@@dashboard/rest/dashboard-product-rest.service';
import {Product} from '@@shared/models/product';
import {ProductConverter} from '@@dashboard/converters/product.converter';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  templateUrl: 'product-form-page.component.html',
  styleUrls: ['product-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormPageComponent implements OnInit {

  public productForm: FormGroup;
  public imagePath: any;

  constructor(private dashboardProductRestService: DashboardProductRestService,
              private dashboardNavigationService: DashboardNavigationService,
              private cdr: ChangeDetectorRef,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onFileSelected(files: File[]): void {
    const file: File = files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePath = reader.result;
      this.productForm.controls.img.setValue(file);
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      img: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): any {
    const fv = this.productForm.getRawValue();
    const product: Product = ProductConverter.toProduct(fv);

    const formData: FormData = new FormData();
    formData.append('name', product.name);
    formData.append('price', `${product.price}`);
    formData.append('img', fv.img);

    this.dashboardProductRestService.create$(formData).subscribe(() => {
      this.dashboardNavigationService.goToProductsList();
    });
  }
}
