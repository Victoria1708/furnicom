import {Component, Input, OnInit} from '@angular/core';
import {Product} from '@@shared/models/product';

@Component({
  selector: 'app-compact-product',
  templateUrl: 'compact-product.component.html',
  styleUrls: ['compact-product.component.scss']
})
export class CompactProductComponent implements OnInit {

  @Input() product: Product;

  ngOnInit(): void {}
}
