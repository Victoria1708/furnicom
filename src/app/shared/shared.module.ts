import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageDirective} from './directives/image.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule
];

const SHARED_DECLARATIONS = [
  ...[ImageDirective],
];

@NgModule({
  imports: SHARED_IMPORTS,
  declarations: SHARED_DECLARATIONS,
  exports: [...SHARED_IMPORTS, ...SHARED_DECLARATIONS]
})
export class AppSharedModule {}
