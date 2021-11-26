import {NgModule} from '@angular/core';
import {ControlWrapperComponent} from '@@app/forms/components/control-wrapper.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ControlWrapperComponent],
  declarations: [ControlWrapperComponent]
})
export class AppFormsModule {}
