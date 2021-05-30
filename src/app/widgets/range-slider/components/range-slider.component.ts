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

  private onChange: () => void;
  private onTouched: () => void;

  public leftRangeShift: number;
  public rightRangeShift: number;
  public fromSliderValue: number;
  public toSliderValue: number;
  public disabled: boolean;
  public range: SliderRange;

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
    this.onChange = () => this.updateRangeTrackAndEmitOutputValues();
    this.onTouched = () => {};
  }

  ngOnInit(): void {
    this.fromSliderValue = this.initialFrom;
    this.toSliderValue = this.initialTo;
    this.range = {from: this.initialFrom, to: this.initialTo};
    this.updateRangeTrackAndEmitOutputValues();
  }

  onFromChange(fromSliderValue: number): void {
    this.fromSliderValue = fromSliderValue;
    if (fromSliderValue < this.toSliderValue) {
      this.range.from = fromSliderValue;
      this.range.to = this.toSliderValue;
    } else {
      this.range.from = this.toSliderValue;
      this.range.to = fromSliderValue;
    }
    this.onChange();
    this.onTouched();
  }

  onToChange(toSliderValue: number): void {
    this.toSliderValue = toSliderValue;
    if (toSliderValue > this.fromSliderValue) {
      this.range.from = this.fromSliderValue;
      this.range.to = toSliderValue;
    } else {
      this.range.from = toSliderValue;
      this.range.to = this.fromSliderValue;
    }
    this.onChange();
    this.onTouched();
  }

  writeValue(range: SliderRange): void {
    if (range) {
      this.range = range;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = () => {
      this.updateRangeTrackAndEmitOutputValues();
      fn(this.range);
    };
    setTimeout(() => this.onChange());
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private updateRangeTrackAndEmitOutputValues(): void {
    this.from.emit(this.range.from);
    this.to.emit(this.range.to);
    this.leftRangeShift = this.getLeftRangeShift();
    this.rightRangeShift = this.getRightRangeShift();
  }

  private getLeftRangeShift(): number {
    return this.range.from * 100 / this.max;
  }

  private getRightRangeShift(): number {
    return (this.max - this.range.to) * 100 / this.max;
  }
}
