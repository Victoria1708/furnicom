import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {AppSharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppStateModule} from './app-state.module';
import {AppMainPageModule} from '@@main/main-page.module';
import {AppProductsPageModule} from '@@products/products-page.module';
import {AppTranslationModule} from '@@app/app-translation.module';
import {AppDropdownModule} from '@@app/widgets/dropdown/dropdown.module';
import {IConfig, NgxMaskModule} from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: true
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppStateModule,
    AppSharedModule,
    AppRoutingModule,
    AppMainPageModule,
    AppProductsPageModule,
    AppTranslationModule,
    AppDropdownModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
