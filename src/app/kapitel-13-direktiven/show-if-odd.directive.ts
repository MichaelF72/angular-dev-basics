import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIfOdd]',
  standalone: true
})
export class ShowIfOddDirective {
  private hasView = false;

  @Input() set appShowIfOdd(value: number) {
    if (value % 2 !== 0 && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (value % 2 === 0 && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<never>,
    private viewContainer: ViewContainerRef
  ) {}
}
