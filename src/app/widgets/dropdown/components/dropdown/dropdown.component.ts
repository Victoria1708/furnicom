import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ListItem} from '@@app/widgets/dropdown/models/list-item';

export const DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 'app-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
  providers: [DROPDOWN_VALUE_ACCESSOR]
})
export class DropdownComponent implements ControlValueAccessor {

  private onChange: (value: ListItem) => void;
  private onTouched: () => void;
  public disabled: boolean;
  public open: boolean;
  public selectedItem: ListItem;
  @Input() items: ListItem[];

  constructor() {
    this.onChange = (item: ListItem) => this.selectValue(item);
    this.onTouched = () => {};
  }

  openDropdown(): void {
    this.open = true;
  }

  closeDropdown(): void {
    this.open = false;
  }

  selectItem(item: ListItem): void {
    this.onChange(item);
    this.onTouched();
  }

  writeValue(value: string): void {
    this.selectedItem = this.items.find(i => i.value === value);
  }

  registerOnChange(fn: any): void {
    this.onChange = (item: ListItem) => {
      this.selectValue(item);
      fn(item.value);
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private selectValue(item: ListItem): void {
    this.selectedItem = item;
    this.closeDropdown();
  }
}
