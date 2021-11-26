export class DomEventUtils {

  static extractPastedText(event: any): string {
    if (event.clipboardData && event.clipboardData.getData) {
      return event.clipboardData.getData('text/plain');
    }
    return '';
  }

  static extractDroppedText(event: any): string {
    if (event.dataTransfer && event.dataTransfer.getData) {
      return event.dataTransfer.getData('text');
    }
    return '';
  }
}
