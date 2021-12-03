import {AbstractControl} from '@angular/forms';
import {CollectionUtils} from '@@app/core/utils/collection.utils';
import {FieldControl} from '@@app/forms/models/forms';
import {startWith} from 'rxjs/operators';
import {combineLatest, Observable} from 'rxjs';
import {FieldMessage} from '@@app/forms/models/field-message';

export class FormControlUtils {

  static hasDisplayMessage(control: AbstractControl): boolean {
    return control && control.touched && this.hasMessage(control);
  }

  static getDisplayMessage(control: AbstractControl): FieldMessage {
    return this.hasDisplayMessage(control) ? this.getMessage(control) : null;
  }

  static hasMessage(control: AbstractControl): boolean {
    return CollectionUtils.isNotEmpty(control.errors);
  }

  static getMessage(control: AbstractControl): FieldMessage {
    if (CollectionUtils.isNotEmpty(control.errors)) {
      const errorKeys: string[] = Object.keys(control.errors);
      const firstErrorKey: string = CollectionUtils.getFirstElement(errorKeys);
      return {
        translationKey: `validation.${errorKeys}`,
        params: control.errors[firstErrorKey]
      };
    }
    return null;
  }

  static controlStateChanged$(control: FieldControl): Observable<any> {
    const status$ = control.statusChanges.pipe(startWith(control.status));
    const touched$ = control.touchedChanges.pipe(startWith(control.touched));
    return combineLatest([status$, touched$]);
  }
}
