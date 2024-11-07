import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ShowIfOddDirective } from './show-if-odd.directive';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-kapitel-13-direktiven',
  standalone: true,
  imports: [HighlightDirective, ShowIfOddDirective, NgForOf, NgIf], // Importiere die Direktiven und eingebauten Direktiven wie NgForOf, NgIf
  templateUrl: './kapitel-13-direktiven.component.html',
  styleUrls: ['./kapitel-13-direktiven.component.css'],
})
export class Kapitel13DirektivenComponent {
  items = [1, 2, 3, 4, 5, 6];
}
