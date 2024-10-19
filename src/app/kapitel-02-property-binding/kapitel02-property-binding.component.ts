import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-kapitel-02-property-binding',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './kapitel02-property-binding.component.html',
  styleUrl: './kapitel02-property-binding.component.css',
})
export class Kapitel02PropertyBindingComponent {}
