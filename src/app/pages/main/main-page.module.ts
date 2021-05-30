import {AppSectionModule} from '@@app/widgets/section/section.module';
import {MainPageComponent} from '@@main/components/main-page/main-page.component';
import {AppSharedModule} from '@@shared/shared.module';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    AppSharedModule,
    AppSectionModule
  ],
  declarations: [MainPageComponent],
})
export class AppMainPageModule {}
