import {NgModule} from '@angular/core';
import {SectionComponent} from '@@app/widgets/section/components/section.component';

const SHARED_DECLARATION = [
  SectionComponent
];

@NgModule({
  declarations: SHARED_DECLARATION,
  exports: SHARED_DECLARATION
})
export class AppSectionModule {}
