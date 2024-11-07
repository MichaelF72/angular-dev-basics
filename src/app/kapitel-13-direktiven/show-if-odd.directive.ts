import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appShowIfOdd]',
})
export class ShowIfOddDirective {
  // (5) Die Strukturdirektive verwendet TemplateRef und ViewContainerRef zur Einbettung von Elementen
  @Input() set appShowIfOdd(value: number) {
    if (value % 2 !== 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}
}
