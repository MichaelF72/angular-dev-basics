import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // (8) Tree-Shakable Provider: Der Service registriert sich selbst im root-Injektor.
})
// (2) Ein Service in der Angular-Welt ist eine Klasse mit dem Decorator @Injectable().
export class MyService {
  getMessage(): string {
    return 'Hello from MyService!';
  }
}
