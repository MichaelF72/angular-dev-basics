import { Routes } from '@angular/router';
import { AboutComponent } from './kapitel-05-routing/about/about.component';
import { HomeComponent } from './kapitel-05-routing/home/home.component';
import { ItemDetailComponent } from './kapitel-05-routing/item-detail/item-detail.component';

function myDelay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// (1) Der Router verwaltet die URLs der Anwendung.
// (2) Die Routen legen fest, welche Komponente für welche URL geladen wird.
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemDetailComponent }, // Route für Item-Detail
  {
    path: 'lazy', // Lazy-Loading für die Kapitel14-Komponente
    loadComponent: () =>
      myDelay(2000) // 2 Sekunden Verzögerung
        .then(() => import('./kapitel-14-lazy-loading/kapitel-14-lazy-loading.component'))
        .then(m => m.Kapitel14LazyLoadingComponent),
  },
];
