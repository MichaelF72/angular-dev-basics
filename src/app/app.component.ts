import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KomponentenComponent} from "./komponenten/komponenten.component";
import {PropertyBindingComponent} from "./property-binding/property-binding.component"; // Import der neuen Komponente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KomponentenComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-dev-basics';
}
