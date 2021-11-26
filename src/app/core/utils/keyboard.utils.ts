/* tslint:disable */

const SPECIAL_KEYS = ['Backspace', 'Tab', 'End', 'Home', 'Delete', 'Shift'];

export class KeyboardUtils {

  static isEnterKey(event: KeyboardEvent): boolean {
    const keyCode = event.keyCode || event.which;
    return keyCode === 13;
  }

  static isSpecialKey(key: string): boolean {
    return SPECIAL_KEYS.includes(key);
  }

  static isSpecialKeyOrCombination(event: KeyboardEvent): boolean {
    if (this.isSpecialKey(event.key)) {
      return true;
    }
    const keyCode = event.keyCode || event.which;
    return [46, 8, 9, 27, 13].indexOf(keyCode) !== -1 || // Allow: Delete, Backspace, Tab, Escape, Enter
      (keyCode === 65 && event.ctrlKey === true) || // Allow: Ctrl + A
      (keyCode === 67 && event.ctrlKey === true) || // Allow: Ctrl + C
      (keyCode === 86 && event.ctrlKey === true) || // Allow: Ctrl + V
      (keyCode === 88 && event.ctrlKey === true) || // Allow: Ctrl + X
      (keyCode === 65 && event.metaKey === true) || // Cmd+A (Mac)
      (keyCode === 67 && event.metaKey === true) || // Cmd+C (Mac)
      (keyCode === 86 && event.metaKey === true) || // Cmd+V (Mac)
      (keyCode === 88 && event.metaKey === true) || // Cmd+X (Mac)
      (keyCode >= 35 && keyCode <= 39); // Home, End, Left, Right
  }
}
