import {AbstractControl, ValidatorFn} from '@angular/forms';
import {RegExpProvider} from '@@app/core/providers/reg-exp.provider';

export function floatNumberValidator(params: { precision: number }): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.value) {
      const floatNumberRebExp = RegExpProvider.getDynamic('floatNumber', {precision: params.precision});
      return control.value.match(floatNumberRebExp) ? null : {isNotNumber: ''};
    }
    return null;
  };
}
