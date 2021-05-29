import {NgModule} from '@angular/core';
import {MainPageComponent} from '@@main/components/main-page/main-page.component';
import {AppSharedModule} from '@@shared/shared.module';
import {AppSectionModule} from '@@app/widgets/section/section.module';
import {AppRangeSliderModule} from '@@app/widgets/range-slider/range-slider.module';

@NgModule({
  imports: [
    AppSharedModule,
    AppSectionModule,
    AppRangeSliderModule
  ],
  declarations: [MainPageComponent],
})
export class AppMainPageModule {}
