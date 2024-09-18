import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Importiere die Routen

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Routen werden hier eingebunden
    provideRouter(routes),
    provideHttpClient(), // HTTP-Client Provider hinzufügen
  ],
};
