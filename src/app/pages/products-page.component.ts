import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  public products: any[];

  constructor() {
    this.products = [{}, {}, {}, {}, {}, {}];
  }

  ngOnInit(): void {}
}