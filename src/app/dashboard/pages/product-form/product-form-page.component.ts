import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DashboardNavigationService} from '@@app/router/services/dashboard-navigation.service';

@Component({
  templateUrl: 'product-form-page.component.html',
  styleUrls: ['product-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormPageComponent implements OnInit {
  createProductForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient,
              private dashboardNavigationService: DashboardNavigationService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createProductForm = this.fb.group({
      name: [],
      price: [],
      imgUrl: []
    });
  }

  onSubmit(): any {
    const body = this.createProductForm.getRawValue();
    this.httpClient.post('http://localhost:3000/api/products', body).subscribe(() =>
      this.dashboardNavigationService.goToProductsList());
  }
}
