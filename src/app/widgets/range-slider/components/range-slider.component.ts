import {SliderRange} from '@@app/widgets/range-slider/models/slider-range';
import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const RANGE_SLIDER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeSliderComponent),
  multi: true
};

@Component({
  selector: 'app-range-slider',
  templateUrl: 'range-slider.component.html',
  styleUrls: ['range-slider.component.scss'],
  providers: [RANGE_SLIDER_VALUE_ACCESSOR]
})
export class RangeSliderComponent implements ControlValueAccessor, OnInit {

  private onChange: (range: SliderRange) => void;
  private onTouched: () => void;

  public fromSliderValue: number;
  public toSliderValue: number;
  public range: SliderRange;
  public disabled: boolean;

  @Input() initialFrom: number;
  @Input() initialTo: number;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Output() from: EventEmitter<number>;
  @Output() to: EventEmitter<number>;

  constructor() {
    this.min = 0;
    this.step = 1;
    this.from = new EventEmitter<number>();
    this.to = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.fromSliderValue = this.initialFrom;
    this.toSliderValue = this.initialTo;
    this.range = {from: this.initialFrom, to: this.initialTo};
  }

  onFromChange(fromSliderValue: number): void {
    this.fromSliderValue = fromSliderValue;
    if (fromSliderValue < this.toSliderValue) {
      this.range.from = fromSliderValue;
    } else {
      this.range.to = fromSliderValue;
    }
    this.onChange(this.range);
    this.onTouched();
  }

  onToChange(toSliderValue: number): void {
    this.toSliderValue = toSliderValue;
    if (toSliderValue > this.fromSliderValue) {
      this.range.to = toSliderValue;
    } else {
      this.range.from = toSliderValue;
    }
    this.onChange(this.range);
    this.onTouched();
  }

  writeValue(range: SliderRange): void {
    if (range) {
      this.range = range;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = (range: SliderRange) => {
      this.from.emit(this.range.from);
      this.to.emit(this.range.to);
      fn(range);
    };
    setTimeout(() => {
      this.onChange(this.range);
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
