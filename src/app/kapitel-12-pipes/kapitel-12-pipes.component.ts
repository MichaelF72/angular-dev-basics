import { Component } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ReverseStringPipe } from './reverse-string.pipe'; // Importiere die benutzerdefinierte Pipe

@Component({
  selector: 'app-kapitel-12-pipes',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    DecimalPipe,
    LowerCasePipe,
    UpperCasePipe,
    ReverseStringPipe,
    CurrencyPipe,
  ], // Füge ReverseStringPipe zu den Imports hinzu
  templateUrl: './kapitel-12-pipes.component.html',
  styleUrls: ['./kapitel-12-pipes.component.css'],
})
export class Kapitel12PipesComponent  {
  today: Date = new Date();
  amount = 1234.567;
  name = 'Angular Pipes Example';
  asyncData$: Observable<string> = of('Daten geladen!').pipe(delay(2000));
}
