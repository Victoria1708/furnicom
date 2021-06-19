import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../shared/models/product';

@Injectable({providedIn: 'root'})
export class ProductsRestService {

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }
}
