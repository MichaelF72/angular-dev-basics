import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // (4) Ändern der Hintergrundfarbe des Host-Elements mit HostBinding
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    // (1) Ordnen zusätzlicher Logik zu: Standard-Hintergrundfarbe
    this.backgroundColor = 'lightblue';
  }

  // (4) Fängt Hover-Events mit HostListener ab und ändert die Farbe
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightgreen';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'lightblue';
  }
}
