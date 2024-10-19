import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() message!: string; // Property, das durch Property Binding gesetzt wird

  constructor() {
    console.log('Constructor: Message is', this.message); // (9) Die Input-Properties sind im Konstruktor noch nicht initialisiert.
  }

  ngOnInit(): void {
    console.log('ngOnInit: Message is', this.message); // (9) Die Input-Properties sind in ngOnInit verfügbar.
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes); // (10) ngOnChanges wird ausgeführt, wenn sich ein Input-Property ändert.
  }
}
