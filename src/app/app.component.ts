import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KomponentenComponent} from "./komponenten/komponenten.component"; // Import der neuen Komponente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KomponentenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dev-basics';
}
