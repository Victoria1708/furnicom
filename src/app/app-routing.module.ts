import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/main/main-page.component';
import {ProductsPageComponent} from './pages/products/products-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
