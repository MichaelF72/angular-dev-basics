import { Injectable, InjectionToken } from '@angular/core';

// (2) Ein Service in Angular mit @Injectable() erstellt.
@Injectable({
  providedIn: 'root', // (8) Tree-shakable Provider: Der Service wird global zur Verfügung gestellt.
})
export class DataService {
  getData(): string {
    return 'Daten vom Service';
  }
}

// (10) InjectionToken für einen statischen Wert
export const TOKEN_VALUE = new InjectionToken<string>('tokenValue');
