import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Product} from '@@shared/models/product';
import {ProductViewType} from '@@shared/models/product-view-type';

@Component({
  selector: 'app-product',
  template: `
    <app-compact-product *ngIf="viewType === ProductsViewType.COMPACT" [product]="product"></app-compact-product>
    <app-full-size-product *ngIf="viewType === ProductsViewType.FULL_SIZE" [product]="product"></app-full-size-product>
  `,
  styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {

  public ProductsViewType = ProductViewType;
  public viewType: ProductViewType;
  @Input() product: Product;

  constructor(private hostElementRef: ElementRef<HTMLElement>) {
    this.viewType = ProductViewType.COMPACT;
  }

  ngOnInit(): void {}
}
