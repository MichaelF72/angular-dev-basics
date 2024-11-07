import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfOddDirective } from './show-if-odd.directive';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-kapitel-13-direktiven',
  standalone: true,
  imports: [CommonModule, ShowIfOddDirective, HighlightDirective],
  templateUrl: './kapitel-13-direktiven.component.html',
  styleUrls: ['./kapitel-13-direktiven.component.css'],
})
export class Kapitel13DirektivenComponent {
  items = [1, 2, 3, 4, 5];
}
