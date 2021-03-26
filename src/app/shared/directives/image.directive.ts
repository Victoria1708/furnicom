import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {PathConstants} from '../constants/path.constants';

@Directive({selector: '[appImageName]'})
export class ImageDirective implements OnInit {

  private hostElement: HTMLImageElement;
  @Input('appImageName') image: string;

  constructor(private hostElementRef: ElementRef<HTMLImageElement>) {
    this.hostElement = hostElementRef.nativeElement;
  }

  ngOnInit(): void {
    const src = `${PathConstants.IMAGES}/${this.image}`;
    this.hostElement.setAttribute('src', src);
  }
}
