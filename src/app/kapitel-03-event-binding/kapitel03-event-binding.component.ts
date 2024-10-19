import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-kapitel-03-event-binding',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './kapitel03-event-binding.component.html',
  styleUrl: './kapitel03-event-binding.component.css',
})
export class Kapitel03EventBindingComponent {}
