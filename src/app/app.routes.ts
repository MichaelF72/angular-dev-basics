import { Routes } from '@angular/router';
import { AboutComponent } from './05-routing/about/about.component';
import { ItemDetailComponent } from './05-routing/item-detail/item-detail.component';
import { RoutingComponent } from './05-routing/routing.component';

// (1) Der Router verwaltet die URLs der Anwendung.
// (2) Die Routen legen fest, welche Komponente für welche URL geladen wird.
export const routes: Routes = [
  { path: '', component: RoutingComponent }, // (3) Pfade in Routen ohne führenden Slash.
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemDetailComponent }, // (9) Übergabe von Routenparametern.
  { path: '**', redirectTo: '' }, // (14) Wildcard-Route zur Umleitung auf die Startseite.
];
