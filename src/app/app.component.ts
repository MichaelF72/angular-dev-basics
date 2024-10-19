import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Kapitel01InterpolationComponent } from './kapitel-01-interpolation/kapitel01-interpolation.component';
import { Kapitel02PropertyBindingComponent } from './kapitel-02-property-binding/kapitel02-property-binding.component';
import { Kapitel03EventBindingComponent } from './kapitel-03-event-binding/kapitel03-event-binding.component';
import { Kapitel04DependencyInjectionComponent } from './kapitel-04-dependency-injection/kapitel04-dependency-injection.component';
import { Kapitel05RoutingComponent } from './kapitel-05-routing/kapitel05-routing.component';
import { Kapitel06HttpComponent } from './kapitel-06-http/kapitel06-http.component';
import { Kapitel07RxjsExampleComponent } from './kapitel-07-rxjs/rxjs.component';
import { Kapitel08InterceptorsComponent } from './kapitel-08-interceptors/kapitel08-interceptors.component';
import { Kapitel09TemplateDrivenFormsComponent } from './kapitel-09-template-driven-forms/kapitel09-template-driven-forms.component';
import { Kapitel10ReactiveFormsComponent } from './kapitel-10-reactive-forms/kapitel10-reactive-forms.component';
import { Kapitel11FormularvalidierungComponent } from './kapitel-11-formularvalidierung/kapitel11-formularvalidierung.component';
import { Kapitel12PipesComponent } from './kapitel-12-pipes/kapitel12-pipes.component';
import { Kapitel13DirektivenComponent } from './kapitel-13-direktiven/kapitel13-direktiven.component';
import { Kapitel14LazyLoadingComponent } from './kapitel-14-lazy-loading/kapitel14-lazy-loading.component';
import { Kapitel15GuardsComponent } from './kapitel-15-guards/kapitel15-guards.component';
import { Kapitel16StandaloneComponentsComponent } from './kapitel-16-standalone-components/kapitel16-standalone-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Kapitel01InterpolationComponent,
    Kapitel02PropertyBindingComponent,
    Kapitel03EventBindingComponent,
    Kapitel04DependencyInjectionComponent,
    Kapitel05RoutingComponent,
    Kapitel06HttpComponent,
    Kapitel07RxjsExampleComponent,
    Kapitel08InterceptorsComponent,
    Kapitel09TemplateDrivenFormsComponent,
    Kapitel10ReactiveFormsComponent,
    Kapitel11FormularvalidierungComponent,
    Kapitel12PipesComponent,
    Kapitel13DirektivenComponent,
    Kapitel14LazyLoadingComponent,
    Kapitel15GuardsComponent,
    Kapitel16StandaloneComponentsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-dev-basics';
}
