import {Product} from '@@shared/models/product';

export class ProductConverter {

  static toProduct(formValue: any): Product {
    return {
      name: formValue.name,
      price: formValue.price,
      img: formValue.img
    };
  }
}
