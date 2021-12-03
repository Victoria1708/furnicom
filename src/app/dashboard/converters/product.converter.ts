import {Product} from '@@shared/models/product';
import {ProductForm} from '@@dashboard/models/product-form';

export class ProductConverter {

  static toProduct(formValue: ProductForm): Product {
    return {
      name: formValue.name,
      price: formValue.price,
      images: formValue.images.map(f => f.name)
    };
  }
}
