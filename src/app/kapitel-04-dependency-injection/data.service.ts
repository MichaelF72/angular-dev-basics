import { Injectable, InjectionToken } from '@angular/core';

// (2) Der Service wird hier mit @Injectable() dekoriert und ist für Dependency Injection verfügbar.
@Injectable({
  providedIn: 'root'  // (8) Tree-shakable Provider: Der Service wird global im Root-Injector registriert.
})
export class DataService {
  getData(): string {
    return 'Daten vom Service';
  }
}

// (10) Hier wird ein InjectionToken erstellt, um einen primitiven Wert wie einen String bereitzustellen.
// Jeder InjectionToken ist eindeutig, was verhindert, dass es Namenskollisionen gibt, z.B. bei der Bereitstellung von mehreren String-Werten.
export const TOKEN_VALUE = new InjectionToken<string>('tokenValue');
