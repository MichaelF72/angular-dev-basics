import { Component, Inject } from '@angular/core';
import { MyService } from './my.service'; // (4) Importieren des MyService
import { TOKEN_VALUE } from './custom.service'; // (11) Injection des DI-Tokens

@Component({
  selector: 'app-04-dependency-injection',
  standalone: true,
  imports: [],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css',
  // (6) Provider für MyService und TOKEN_VALUE bereitstellen
  providers: [
    MyService, // MyService als Provider
    { provide: TOKEN_VALUE, useValue: 'Dies ist der Token-Wert!' }, // Token-Provider
  ],
})
export class DependencyInjectionComponent {
  message: string;
  tokenMessage: string;

  // (3) Angular setzt auf das Entwurfsmuster Dependency Injection, um Abhängigkeiten anzufordern.
  // (4) Abhängigkeiten werden über den Konstruktor injiziert, und Angular kümmert sich darum, diese bereitzustellen.
  constructor(
    private myService: MyService,
    @Inject(TOKEN_VALUE) tokenValue: string,
  ) {
    this.message = this.myService.getMessage(); // (1) Geschäftslogik wird in Services ausgelagert, um die Komplexität zu reduzieren.
    this.tokenMessage = `Injected Token Value: ${tokenValue}`; // (11) Das InjectionToken wird injiziert und genutzt.
  }
}
