import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AppSharedModule} from './shared/shared.module';
import {ProductsPageComponent} from './pages/products/products-page.component';
import {ProductComponent} from './components/product/product.component';
import {MainPageComponent} from './pages/main/main-page.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppSharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    ProductComponent,
    ProductsPageComponent,
    MainPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
