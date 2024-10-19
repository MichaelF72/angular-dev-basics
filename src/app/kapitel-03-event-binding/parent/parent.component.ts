import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  childMessage: string = '';

  handleChildEvent(message: string) {
    this.childMessage = message; // Aktualisierung der Nachricht, die das Event enthält
  }
}
