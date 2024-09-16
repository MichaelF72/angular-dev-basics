import { Component, Inject } from '@angular/core';
import { DataService, TOKEN_VALUE } from './data.service';

@Component({
  selector: 'app-04-dependency-injection',
  standalone: true,
  template: `
    <h1>{{ data }}</h1> <!-- Anzeige der Nachricht vom Service -->
    <h2>{{ token }}</h2> <!-- Anzeige des statischen Wertes vom Token -->
  `,
  // (7) Provider für InjectionToken und Service direkt in der Standalone Component definiert
  providers: [
    { provide: TOKEN_VALUE, useValue: 'Statischer Token-Wert' }  // (9) Der InjectionToken wird mit einem statischen Wert bereitgestellt.
  ]
})
export class DependencyInjectionComponent {
  data: string;
  token: string;

  // (3) Angular setzt auf Dependency Injection, um Abhängigkeiten bereitzustellen.
  constructor(
    private dataService: DataService,  // (5) Der DataService wird als Singleton bereitgestellt und injiziert.
    @Inject(TOKEN_VALUE) tokenValue: string // (11) InjectionToken wird injiziert, um den bereitgestellten Wert zu erhalten.
  ) {
    // Die Geschäftslogik vom Service wird verwendet, um die Daten abzurufen.
    this.data = this.dataService.getData();

    // Der über den InjectionToken injizierte statische Wert wird angezeigt.
    this.token = tokenValue;
  }
}
