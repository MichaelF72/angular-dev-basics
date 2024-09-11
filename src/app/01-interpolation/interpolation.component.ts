import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-01-interpolation', // (2) Die Komponente besitzt einen Selektor
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})

// (1) Eine Komponente besteht immer aus einer TypeScript-Klasse und einem Template.
export class InterpolationComponent {
  message = 'Hallo Komponenten-Klasse!';
  showMessage = true;
  items: string[] = ['string 1', 'string 2', 'string 3'];
}
