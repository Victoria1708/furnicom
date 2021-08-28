import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DashboardProduct} from '@@dashboard/models/dashboard-product';
import {DashboardProductRestService} from '@@dashboard/rest/dashboard-product-rest.service';
import {DashboardNavigationService} from '@@app/router/services/dashboard-navigation.service';

@Component({
  templateUrl: 'products-page.component.html',
  styleUrls: ['products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPageComponent implements OnInit {

  public products: DashboardProduct[];

  constructor(private dashboardProductRestService: DashboardProductRestService,
              private dashboardNavigationService: DashboardNavigationService,
              private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.dashboardProductRestService.getAll$().subscribe((products: DashboardProduct[]) => {
      this.products = products;
      this.cdr.detectChanges();
    });
  }

  goToCreateProductPage(): void {
    this.dashboardNavigationService.goToCreateProductPage();
  }
}
