import {NgModule} from '@angular/core';
import {ControlWrapperComponent} from '@@app/forms/components/control-wrapper.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [ControlWrapperComponent],
  declarations: [ControlWrapperComponent]
})
export class AppFormsModule {}
