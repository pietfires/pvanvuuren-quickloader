import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { throwError } from 'rxjs';

@Directive({
  selector: '[placeholderIf]'
})
export class PlaceholderIfDirective {


  @Input('placeholderIf')
  set ElementStyle(placeholderIf) {
    if (!placeholderIf) {
      this.renderer.removeClass(this.el.nativeElement, 'skeleton');
    }
    else {
      this.renderer.addClass(this.el.nativeElement, 'skeleton');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
}
