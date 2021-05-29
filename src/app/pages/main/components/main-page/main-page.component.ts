import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {

  public rangeSliderControl: FormControl;
  constructor() {
    this.rangeSliderControl = new FormControl();
    this.rangeSliderControl.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}

  // onFromRangeChange(from: number): void {
  //   console.log('from', from);
  // }
  //
  // onToRangeChange(to: number): void {
  //   console.log('to', to);
  // }
  //
  // onChange(resultRange: {from: number, to: number}): void {
  //   console.log('resultRange:', resultRange);
  // }
}
