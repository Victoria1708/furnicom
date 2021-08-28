import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class DashboardNavigationService {

  constructor(private router: Router) {
    console.log('DashboardNavigationService');
  }

  goToCreateProductPage(): void {
    this.router.navigate(['/dashboard/products/create']);
  }

  goToEditProductPage(productId: string): void {
    this.router.navigate(['/dashboard/products/edit', productId]);
  }

  goToProductsList(): void {
    this.router.navigate(['/dashboard/products']);
  }
}
