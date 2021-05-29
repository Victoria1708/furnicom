import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SliderRange} from '@@app/widgets/range-slider/models/slider-range';

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

  private modelRangeValue: SliderRange;
  private onChange: (range: SliderRange) => void;
  private onTouched: () => void;
  public resultRange: SliderRange;
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
    this.modelRangeValue = null;
    this.resultRange = {from: this.initialFrom, to: this.initialTo};
  }

  onFromChange(sliderFromValue: number): void {
    if (sliderFromValue < this.resultRange.to) {
      this.resultRange.from = sliderFromValue;
    } else {
      this.resultRange.to = sliderFromValue;
    }
    this.onChange(this.resultRange);
    this.onTouched();
  }

  onToChange(sliderToValue: number): void {
    if (sliderToValue > this.resultRange.from) {
      this.resultRange.to = sliderToValue;
    } else {
      this.resultRange.from = sliderToValue;
    }
    this.onChange(this.resultRange);
    this.onTouched();
  }

  writeValue(range: SliderRange): void {
    if (range) {
      this.resultRange = range;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = (range: SliderRange) => {
      this.modelRangeValue = range;
      this.from.emit(this.resultRange.from);
      this.to.emit(this.resultRange.to);
      fn(range);
    };
    if (this.isValueChange()) {
      setTimeout(() => this.onChange(this.resultRange));
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  isValueChange(): boolean {
    return this.modelRangeValue !== this.resultRange;
  }
}
