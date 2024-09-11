import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-komponenten', // (2) Die Komponente besitzt einen Selektor
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './komponenten.component.html',
  styleUrl: './komponenten.component.css'
})

// (1) Eine Komponente beschreibt einen Teil der Oberfläche. Sie besteht immer aus einer TypeScript-Klasse und einem Template.“
// Kommentar: In my.component.ts ist die MyComponent als TypeScript-Klasse definiert, und das Template wird innerhalb des @Component-Dekorators mit HTML definiert.

export class KomponentenComponent {
  message: string = "Hallo Komponenten-Klasse!";
  showMessage: boolean = true;
  items: string[] = ['string 1', 'string 2', 'string 3'];
}
