import { Routes } from '@angular/router';
import { AboutComponent } from './05-routing/about/about.component';
import { HomeComponent } from './05-routing/home/home.component';
import { ItemDetailComponent } from './05-routing/item-detail/item-detail.component';

// (1) Der Router verwaltet die URLs der Anwendung.
// (2) Die Routen legen fest, welche Komponente für welche URL geladen wird.
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemDetailComponent }, // Route für Item-Detail
];
