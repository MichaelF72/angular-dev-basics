import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() childEvent = new EventEmitter<string>(); // (5) @Output mit EventEmitter: Event wird vom Kind an das Elternteil gesendet

  onClick() {
    this.childEvent.emit('Hello from Child Component!'); // (5) Emit Event mit dem Payload
  }
}
