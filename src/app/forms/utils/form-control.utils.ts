import {AbstractControl} from '@angular/forms';
import {CollectionUtils} from '@@app/core/utils/collection.utils';
import {FieldControl} from '@@app/forms/models/forms';
import {startWith} from 'rxjs/operators';
import {combineLatest, Observable} from 'rxjs';

export class FormControlUtils {

  static hasDisplayMessage(control: AbstractControl): boolean {
    return control && control.touched && this.hasMessage(control);
  }

  static getDisplayMessage(control: AbstractControl): string {
    return this.hasDisplayMessage(control) ? this.getMessage(control) : null;
  }

  static hasMessage(control: AbstractControl): boolean {
    return CollectionUtils.isNotEmpty(control.errors);
  }

  static getMessage(control: AbstractControl): string {
    if (CollectionUtils.isNotEmpty(control.errors)) {
      const errorKeys = Object.keys(control.errors);
      return CollectionUtils.getFirstElement(errorKeys);
    }
    return null;
  }

  static controlStateChanged$(control: FieldControl): Observable<any> {
    const status$ = control.statusChanges.pipe(startWith(control.status));
    const touched$ = control.touchedChanges.pipe(startWith(control.touched));
    return combineLatest([status$, touched$]);
  }
}
