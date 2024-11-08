import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-kapitel-14-lazy-loading',
  template: `<h2>Kapitel 14: Lazy Loading Demo</h2><router-outlet></router-outlet>`,
  styleUrl: './kapitel-14-lazy-loading.component.css'
})
export class Kapitel14LazyLoadingComponent {}

