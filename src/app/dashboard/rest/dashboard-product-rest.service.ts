import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboardProduct} from '@@dashboard/models/dashboard-product';
import {AppProperties} from '@@app/core/config/app.properties';
import {Product} from '@@shared/models/product';

@Injectable({providedIn: 'root'})
export class DashboardProductRestService {

  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = AppProperties.API_PREFIX;
  }

  getAll$(): Observable<DashboardProduct[]> {
    return this.http.get<DashboardProduct[]>(`${this.baseUrl}/products`);
  }

  create$(productFormData: FormData): Observable<Product> {
    return this.http.post<Product>('api/products', productFormData);
  }
}
