import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-kapitel-05-routing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './kapitel05-routing.component.html',
  styleUrl: './kapitel05-routing.component.css',
})
export class Kapitel05RoutingComponent {}
