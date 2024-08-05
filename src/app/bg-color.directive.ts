import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective implements OnChanges {
  @Input() appBgColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appBgColor']) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appBgColor);
    }
  }
}
