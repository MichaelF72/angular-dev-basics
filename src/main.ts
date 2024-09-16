import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Die Anwendung wird mit der Standalone Component ohne NgModule gebootstrapped.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
