import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AppSharedModule} from './shared/shared.module';
import {ProductsPageComponent} from './pages/products-page.component';
import {ProductComponent} from './components/product/product.component';

@NgModule({
  imports: [
    BrowserModule,
    AppSharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    ProductsPageComponent,
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
