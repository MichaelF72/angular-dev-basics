import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  itemId: string;

  // (10) ActivatedRoute zum Auslesen der Route-Parameter.
  constructor(private route: ActivatedRoute) {
    // (11) Der Snapshot der Route enthält die Parameter, synchron abgerufen.
    this.itemId = this.route.snapshot.paramMap.get('id') ?? '';
  }
}
