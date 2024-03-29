export interface Translation {
  main_page: string;
  my_cart: string;
  products: string;
  add_to_cart: string;
  shop_by: string;
  filter: string;
  sort_by: string;
  create_product: string;
  product: {
    name: string,
    price: string,
  };
  validation: {
    [key: string]: string | {};
    required: string;
    minlength: string;
  };
}
