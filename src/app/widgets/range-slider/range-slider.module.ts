import {NgModule} from '@angular/core';
import {RangeSliderComponent} from '@@app/widgets/range-slider/components/range-slider.component';
import {FormsModule} from '@angular/forms';

const SHARED_DECLARATION = [
  RangeSliderComponent
];

@NgModule({
  imports: [FormsModule],
  declarations: SHARED_DECLARATION,
  exports: SHARED_DECLARATION
})
export class AppRangeSliderModule {}
