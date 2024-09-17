import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './01-interpolation/interpolation.component';
import { PropertyBindingComponent } from './02-property-binding/property-binding.component';
import { EventBindingComponent } from './03-event-binding/event-binding.component';
import { DependencyInjectionComponent } from './04-dependency-injection/dependency-injection.component';
import { RoutingComponent } from './05-routing/routing.component'; // Import der neuen Komponente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DependencyInjectionComponent,
    RoutingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-dev-basics';
}
