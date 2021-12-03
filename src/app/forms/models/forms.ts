import {AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {Observable, Subject} from 'rxjs';

interface ControlOptions {
  onlySelf?: boolean;
  emitEvent?: boolean;
}

const DEFAULT_OPTIONS: ControlOptions = {
  onlySelf: false,
  emitEvent: true
};

export class Form<T> extends FormGroup {

  private touchedChangesSubject: Subject<boolean>;
  public touchedChanges: Observable<boolean>;
  public controls: { [P in keyof T]: AbstractControl };

  constructor(controls: { [key: string]: AbstractControl; },
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(controls, validatorOrOpts, asyncValidator);
    this.touchedChangesSubject = new Subject<boolean>();
    this.touchedChanges = this.touchedChangesSubject.asObservable();
  }

  markAsTouched(opts?: ControlOptions): void {
    opts = {...DEFAULT_OPTIONS, ...(opts || {})};
    super.markAsTouched(opts);
    if (opts.emitEvent) {
      this.touchedChangesSubject.next(true);
    }
  }

  markAsUntouched(opts?: ControlOptions): void {
    opts = {...DEFAULT_OPTIONS, ...(opts || {})};
    super.markAsUntouched(opts);
    if (opts.emitEvent) {
      this.touchedChangesSubject.next(false);
    }
  }

  getRawValue(): T {
    return super.getRawValue() as T;
  }
}

export class FieldControl extends FormControl {

  private touchedChangesSubject: Subject<boolean>;
  public touchedChanges: Observable<boolean>;

  constructor(formState?: any,
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
    super(formState, validatorOrOpts, asyncValidator);
    this.touchedChangesSubject = new Subject<boolean>();
    this.touchedChanges = this.touchedChangesSubject.asObservable();
  }

  markAsTouched(opts?: ControlOptions): void {
    opts = {...DEFAULT_OPTIONS, ...(opts || {})};
    super.markAsTouched(opts);
    if (opts.emitEvent) {
      this.touchedChangesSubject.next(true);
    }
  }

  markAsUntouched(opts?: ControlOptions): void {
    opts = {...DEFAULT_OPTIONS, ...(opts || {})};
    super.markAsUntouched(opts);
    if (opts.emitEvent) {
      this.touchedChangesSubject.next(false);
    }
  }
}

// const ctrlA = new FieldControl(7);
// const ctrlB = new FieldControl(8);
// const ctrlC = new FieldControl(9);
//
// const form = new Form({
//   a: ctrlA,
//   b: ctrlB,
//   c: ctrlC
// });
//
// form.valueChanges.subscribe((v) => console.log('[valueChanges] form', v));
// ctrlA.valueChanges.subscribe((v) => console.log('[valueChanges] ctrlA', v));
// form.touchedChanges.subscribe((v) => console.log('[touchedChanges] form', v));
// ctrlA.touchedChanges.subscribe((v) => {
//   console.log('ctrlA touched', ctrlA.touched);
//   console.log('[touchedChanges] ctrlA', v);
// });
//
// console.log('form:', form.touched);
// console.log('ctrlA:', ctrlA.touched);
//
// ctrlA.markAsTouched({emitEvent: true});
//
// console.log('form:', form.touched);
// console.log('ctrlA:', ctrlA.touched);


/*
  1. Зачем нужны options (onlySelf, emitEvent, emitModelToViewChange, emitViewToModelChange) в setValue
  2. Почему в markAsTouched/markAsUntouched нет опции emitEvent?
  3. Обработать опции emitEvent и onlySelf в методах markAsTouched и markAsUntouched
  4. Расширить класс FormGroup собственным классом Form
  5. Добавить имплементацию touchedChanges для формы
*/


