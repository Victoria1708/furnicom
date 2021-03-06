import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/main/components/main-page/main-page.component';
import {ProductsPageComponent} from './pages/products/components/products-page/products-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'dashboard', loadChildren: () => import('./dashboard/app-dashboard.module').then(m => m.AppDashboardModule)},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
