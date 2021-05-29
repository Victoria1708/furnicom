import {NgModule} from '@angular/core';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {CommonModule} from '@angular/common';

const SHARED_DECLARATION = [
  DropdownComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: SHARED_DECLARATION,
  exports: SHARED_DECLARATION
})
export class AppDropdownModule {}
