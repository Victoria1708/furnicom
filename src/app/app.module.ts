import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {AppSharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppSharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
