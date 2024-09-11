import { Component, Inject } from '@angular/core';
import { DataService, TOKEN_VALUE } from './data.service';

@Component({
  selector: 'app-04-dependency-injection',
  standalone: true,
  imports: [],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css',
  // (7) Provider in der Komponente selbst definieren
  providers: [
    DataService, // Service-Provider
    { provide: TOKEN_VALUE, useValue: 'Statischer Token-Wert' }, // Token-Provider
  ],
})
export class DependencyInjectionComponent {
  data: string;
  token: string;

  // (3) Angular setzt auf Dependency Injection.
  constructor(
    private dataService: DataService,
    @Inject(TOKEN_VALUE) tokenValue: string,
  ) {
    this.data = this.dataService.getData();
    this.token = tokenValue;
  }
}
