import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importiere die Routen

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Routen werden hier eingebunden
    provideRouter(
      routes,
      withPreloading(PreloadAllModules), // Preloading-Strategie hinzugefügt
    ),
    provideHttpClient(), // HTTP-Client Provider hinzufügen
    // (5) Registration des Interceptors mit dem neuen HttpClient-System für Standalone Components.
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
