import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, from, of, interval, timer, throwError, Subscription } from 'rxjs';
import {
  map,
  filter,
  scan,
  takeUntil,
  concatMap,
  retry,
  catchError,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-kapitel-07-rxjs',
  standalone: true,
  template: `
    <div>
      <h1>Reaktive Programmierung mit RxJS</h1>
      <p>Überprüfe die Konsole, um die Datenströme zu sehen.</p>
    </div>
  `,
})
export class Kapitel07RxjsExampleComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>(); // (15) Subject für takeUntil zur Vermeidung von Memory Leaks
  private subscription: Subscription = new Subscription(); // (15) Manuelle Verwaltung der Subscription

  ngOnInit(): void {
    // (1) Reaktive Programmierung modelliert Datenströme und deren Veränderungen.
    // (2) RxJS ist eine mächtige Bibliothek zur reaktiven Entwicklung.
    // (3) Angular verwendet RxJS für HTTP, Routing, Formulare und EventEmitter.

    // (4) Observable: Der wichtigste Datentyp von RxJS.
    const exampleObservable = new Observable<number>(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete(); // (6) Observable kann abgeschlossen werden.
    });

    // (7) Abonnieren eines Observables mit subscribe().
    this.subscription.add(
      exampleObservable.subscribe({
        next: value => console.log('Value: ', value), // (5) Observable liefert Werte durch den Datenstrom zurück.
        complete: () => console.log('Completed'),
        error: err => console.error('Error: ', err),
      }),
    );

    // (8) Observable verhält sich faul und wird erst ausgeführt, wenn es abonniert wird.
    const lazyObservable = new Observable(observer => {
      console.log('Lazy Observable: Execution started');
      observer.next('Lazy value');
      observer.complete();
    });

    this.subscription.add(lazyObservable.subscribe(value => console.log(value)));

    // (9) Creation Functions: Erstellen von Observables mit of(), from(), timer(), interval() und throwError().
    const fromObservable = from([10, 20, 30]);
    const ofObservable = of('Hello', 'World');
    const intervalObservable = interval(1000); // Ein Wert pro Sekunde
    const timerObservable = timer(3000); // Ein Wert nach 3 Sekunden
    const errorObservable = throwError(() => new Error('Something went wrong!'));

    this.subscription.add(
      fromObservable.subscribe(value => console.log('From Observable:', value)),
    );

    this.subscription.add(ofObservable.subscribe(value => console.log('Of Observable:', value)));

    this.subscription.add(
      intervalObservable
        .pipe(takeUntil(this.destroy$))
        .subscribe(value => console.log('Interval:', value)),
    );

    this.subscription.add(timerObservable.subscribe(() => console.log('Timer Observable fired!')));

    this.subscription.add(
      errorObservable.pipe(catchError(() => of('Error caught and handled'))).subscribe({
        next: val => console.log(val),
        error: err => console.error(err),
      }),
    );

    // (10) Operatoren: Werte können transformiert und kombiniert werden.
    const transformedObservable = from([1, 2, 3, 4, 5]).pipe(
      map(val => val * 10), // (12) Basisoperator: map()
      filter(val => val > 20), // (12) Basisoperator: filter()
      scan((acc, curr) => acc + curr, 0), // (12) Basisoperator: scan()
    );

    this.subscription.add(
      transformedObservable.subscribe(value => console.log('Transformed Value: ', value)),
    );

    // (13.1) Kaltes Observable: Wird erst ausgeführt, wenn ein Subscriber vorhanden ist.
    const coldObservable = new Observable(observer => {
      observer.next(Math.random());
      observer.complete();
    });

    this.subscription.add(
      coldObservable.subscribe(value => console.log('Cold Observable Value:', value)),
    );

    // (13.2) Heißes Observable: Subject vereint Observable und Observer.
    const hotSubject = new Subject<number>();
    hotSubject.next(10);
    hotSubject.subscribe(value => console.log('Hot Observable (Subscriber 1):', value));
    hotSubject.next(20); // (14) Subject ist ein heißes Observable
    hotSubject.subscribe(value => console.log('Hot Observable (Subscriber 2):', value));

    // (16) Flattening-Operatoren: concatMap(), mergeMap(), switchMap(), exhaustMap()
    const sourceObservable = of(1, 2, 3);
    const innerObservable = interval(1000).pipe(takeUntil(timer(3000)));

    this.subscription.add(
      sourceObservable
        .pipe(concatMap(() => innerObservable))
        .subscribe(val => console.log('Flattening Operator (concatMap):', val)),
    );

    // (17) retry() Operator: Neuer Versuch bei einem Fehler.
    const retryObservable = errorObservable.pipe(
      retry(3), // Versuch den Fehler 3 Mal abzufangen
      catchError(err => {
        console.error('Retry Failed:', err); // Logge den Fehler
        return of('Retries exhausted, handling error gracefully'); // Fehler nach den 3 Versuchen behandeln
      }),
    );

    this.subscription.add(
      retryObservable.subscribe({
        next: value => console.log(value), // Fehlerbehandlung gibt einen Wert zurück
        error: err => console.error('Final Error:', err), // Wenn etwas schief läuft
      }),
    );

    // (18) catchError(): Fehlerbehandlung
    const handledObservable = errorObservable.pipe(catchError(() => of('Error handled')));

    this.subscription.add(handledObservable.subscribe(value => console.log('Handled:', value)));

    // (19) debounceTime(): "Entprellen" von schnellen aufeinanderfolgenden Werten
    const fastStream$ = interval(300).pipe(debounceTime(500));
    this.subscription.add(fastStream$.subscribe(value => console.log('Debounced Stream:', value)));

    // (20) distinctUntilChanged(): Vermeidet aufeinanderfolgende doppelte Werte
    const distinctStream$ = of(1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged());
    this.subscription.add(
      distinctStream$.subscribe(value => console.log('Distinct Stream:', value)),
    );
  }

  ngOnDestroy(): void {
    // (15) Subscriptions werden beendet, um Memory Leaks zu vermeiden.
    this.destroy$.next();
    this.destroy$.complete();
    this.subscription.unsubscribe();
  }
}
