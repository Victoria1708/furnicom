import {AbstractControl, ValidationErrors} from '@angular/forms';
import {RegExpProvider} from '@@app/core/providers/reg-exp.provider';

export function integerNumberValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value) {
    const integerNumberRegExp = RegExpProvider.getStatic('integerNumber');
    return control.value.match(integerNumberRegExp) ? null : {isNotInteger: ''};
  }
  return null;
}
