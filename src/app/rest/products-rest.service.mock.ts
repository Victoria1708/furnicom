import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../shared/models/product';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductsRestServiceMock {

  constructor() {
    console.warn('[MOCK] ProductsRestServiceMock using');
  }

  getAll$(): Observable<Product[]> {
    return of([
      {id: 1, imgUrl: '/assets/images/products/6.jpg', name: 'AUTE BEEF', price: 180.00},
      {id: 2, imgUrl: '/assets/images/products/7-300x300.jpg', name: 'PROIDNG LABORUM', price: 170.00},
      {id: 3, imgUrl: '/assets/images/products/11-300x300.jpg', name: 'CAQUETOIRE', price: 99.00},
      {id: 4, imgUrl: '/assets/images/products/16-300x300.jpg', name: 'DONEC VEL VENENATIS', price: 100.00},
      {id: 5, imgUrl: '/assets/images/products/16-300x300 (1).jpg', name: 'SALAMI IN BALL TIP PIG EIUSMOD', price: 170.00},
      {id: 6, imgUrl: '/assets/images/products/18-300x300.jpg', name: 'BALANS CHAIR', price: 180.00}
    ]).pipe(delay(3));
  }
}
