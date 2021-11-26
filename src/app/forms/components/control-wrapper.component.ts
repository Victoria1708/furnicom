import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, OnDestroy} from '@angular/core';
import {NgControl} from '@angular/forms';
import {FormControlUtils} from '@@app/forms/utils/form-control.utils';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FieldControl} from '@@app/forms/models/forms';

@Component({
  selector: 'app-control-wrapper',
  templateUrl: 'control-wrapper.component.html',
  styleUrls: ['control-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlWrapperComponent implements AfterViewInit, OnDestroy {

  private unsubscribe$: Subject<void>;
  @ContentChild(NgControl) ngControl: NgControl;
  public control: FieldControl;
  public message: string;
  public hasMessage: boolean;

  @Input() label: string;

  constructor(private  cdr: ChangeDetectorRef) {
    this.unsubscribe$ = new Subject<void>();
  }

  ngAfterViewInit(): void {
    this.control = this.ngControl.control as FieldControl;
    FormControlUtils.controlStateChanged$(this.control)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.message = FormControlUtils.getDisplayMessage(this.control);
        this.hasMessage = FormControlUtils.hasDisplayMessage(this.control);
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
