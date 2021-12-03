import {Injectable} from '@angular/core';
import {FieldControl, Form} from '@@app/forms/models/forms';
import {ProductForm} from '@@dashboard/models/product-form';
import {Validators} from '@angular/forms';
import {CustomValidators} from '@@app/forms/validators';
import {Product} from '@@shared/models/product';

@Injectable()
export class ProductFormService {

  public form: Form<ProductForm>;

  init(product?: Product): void {
    this.form = new Form<ProductForm>({
      name: new FieldControl(product?.name, [Validators.required, Validators.minLength(3)]),
      price: new FieldControl(product?.price, [
        Validators.required,
        CustomValidators.floatNumber({precision: 3}),
        Validators.min(0.01)
      ]),
      images: new FieldControl(product?.images, Validators.required)
    });
  }

  getFormData(): FormData {
    const formData: FormData = new FormData();
    formData.append('name', this.controlValue('name'));
    formData.append('price', `${this.controlValue('price')}`);
    Array.from(this.controlValue('images')).forEach((file: Blob) => {
      formData.append('images', file);
    });
    return formData;
  }

  private controlValue(controlName: keyof ProductForm): any {
    return this.form.controls[controlName].value;
  }
}
