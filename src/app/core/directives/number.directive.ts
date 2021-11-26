import {Directive, ElementRef, HostListener} from '@angular/core';
import {KeyboardUtils} from '@@app/core/utils/keyboard.utils';
import {RegExpProvider} from '@@app/core/providers/reg-exp.provider';
import {DomEventUtils} from '@@app/core/utils/dom-event.utils';

@Directive({selector: '[appNumberName]'})
export class NumberDirective {

  private prevValue: string;
  private prevEvent: string;
  private hostElement: HTMLInputElement;

  constructor(private hostElementRef: ElementRef<HTMLInputElement>) {
    this.hostElement = hostElementRef.nativeElement;
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent): void {
    const target = event.target as HTMLInputElement;
    const cursorStartPosition = target.selectionStart;
    const cursorEndPosition = target.selectionEnd;
    const sourceText = DomEventUtils.extractPastedText(event);
    const result = this.hostElement.value.slice(0, cursorStartPosition) + sourceText + this.hostElement.value.slice(cursorEndPosition);
    if (!result.match(RegExpProvider.getDynamic('floatNumber', {precision: 2}))) {
      event.preventDefault();
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const cursorStartPosition = target.selectionStart;
    const cursorEndPosition = target.selectionEnd;

    if (!KeyboardUtils.isSpecialKeyOrCombination(event)) {
      if (!event.key.match(/[\d,]/)) {
        event.preventDefault();
        return;
      }
      const key = event.key === '.' ? ',' : event.key;
      const predictedValue = target.value.slice(0, cursorStartPosition) + key + target.value.slice(cursorEndPosition);
      if (!predictedValue.match(RegExpProvider.getDynamic('floatNumber', {precision: 2}))) {
        event.preventDefault();
      }
    }
  }

  @HostListener('drop', ['$event']) onDrop(event: ClipboardEvent): void {
    const target = event.target as HTMLInputElement;
    this.prevValue = target.value;
    this.prevEvent = 'drop';
  }

  @HostListener('input', ['$event']) onInput(event: ClipboardEvent): void {
    const target = event.target as HTMLInputElement;
    if (this.prevEvent === 'drop') {
      if (!target.value.match(RegExpProvider.getDynamic('floatNumber', {precision: 2}))) {
        event.preventDefault();
        this.hostElement.value = this.prevValue;
      }
    }
  }
}
