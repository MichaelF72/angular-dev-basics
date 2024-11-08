import { Routes } from '@angular/router';
import { AboutComponent } from './kapitel-05-routing/about/about.component';
import { HomeComponent } from './kapitel-05-routing/home/home.component';
import { ItemDetailComponent } from './kapitel-05-routing/item-detail/item-detail.component';
import { Kapitel14LazyLoadingComponent } from './kapitel-14-lazy-loading/kapitel-14-lazy-loading.component';

// (1) Der Router verwaltet die URLs der Anwendung.
// (2) Die Routen legen fest, welche Komponente für welche URL geladen wird.
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemDetailComponent }, // Route für Item-Detail
  {
    path: 'kapitel-14', // (3) Der Pfad der Basisroute ist das Präfix für alle Routen im geladenen Feature.
    component: Kapitel14LazyLoadingComponent,
    children: [
      {
        path: 'lazy-feature',
        loadChildren: () =>
          import('./kapitel-14-lazy-loading/lazy-feature.component').then(
            m => m.LazyFeatureComponent, // (2) Aktivierung von Lazy Loading mit dynamischem Import und loadChildren.
          ),
      },
    ],
  },
];
