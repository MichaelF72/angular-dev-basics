import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent', // (2) Selektor für die Elternkomponente
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent Component'; // Nachricht, die an die Kindkomponente gesendet wird.
}
