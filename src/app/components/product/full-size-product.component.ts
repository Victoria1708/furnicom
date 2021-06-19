import {Component, Input, OnInit} from '@angular/core';
import {Product} from '@@shared/models/product';

@Component({
  selector: 'app-full-size-product',
  templateUrl: 'full-size-product.component.html',
  styleUrls: ['full-size-product.component.scss']
})
export class FullSizeProductComponent implements OnInit {

  @Input() product: Product;

  ngOnInit(): void {}
}
