import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-kapitel-01-interpolation', // (2) Die Komponente besitzt einen Selektor
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './kapitel01-interpolation.component.html',
  styleUrl: './kapitel01-interpolation.component.css',
})

// (1) Eine Komponente besteht immer aus einer TypeScript-Klasse und einem Template.
export class Kapitel01InterpolationComponent {
  message = 'Hallo Komponenten-Klasse!';
  showMessage = true;
  items: string[] = ['string 1', 'string 2', 'string 3'];
}
