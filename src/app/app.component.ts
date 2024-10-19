import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './01-interpolation/interpolation.component';
import { PropertyBindingComponent } from './02-property-binding/property-binding.component';
import { EventBindingComponent } from './03-event-binding/event-binding.component';
import { DependencyInjectionComponent } from './04-dependency-injection/dependency-injection.component';
import { RoutingComponent } from './05-routing/routing.component';
import { HttpComponent } from './06-http/http.component';
import { RxjsExampleComponent } from './07-rxjs/rxjs.component';
import { InterceptorsComponent } from './08-interceptors/interceptors.component';
import { TemplateDrivenFormsComponent } from './09-template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './10-reactive-forms/reactive-forms.component';
import { FormularvalidierungComponent } from './11-formularvalidierung/formularvalidierung.component';
import { PipesComponent } from './12-pipes/pipes.component';
import { DirektivenComponent } from './13-direktiven/direktiven.component';
import { LazyLoadingComponent } from './14-lazy-loading/lazy-loading.component';
import { GuardsComponent } from './15-guards/guards.component';
import { StandaloneComponentsComponent } from './16-standalone-components/standalone-components.component'; // Import der neuen Komponente

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
    HttpComponent,
    RxjsExampleComponent,
    InterceptorsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    FormularvalidierungComponent,
    PipesComponent,
    DirektivenComponent,
    LazyLoadingComponent,
    GuardsComponent,
    StandaloneComponentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-dev-basics';
}
