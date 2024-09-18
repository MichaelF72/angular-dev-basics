import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './http.component';

// (1) Der integrierte HttpClient abstrahiert und vereinfacht den Zugriff auf externe Serverschnittstellen.
@Injectable({
  providedIn: 'root', // (2) Tree-shakable Provider: HttpClientModule wird in die Anwendung eingebunden.
})
export class HttpService {
  // (3) Über Dependency Injection erhalten wir Zugriff auf den HttpClient.
  constructor(private http: HttpClient) {}

  // (5) Die Aufrufe des HttpClient sollten in einem Service untergebracht werden.
  getData(): Observable<Post[]> {
    const headers = new HttpHeaders({
      'Custom-Header': 'CustomHeaderValue', // (6) Requests können mit Optionen wie Headern gesteuert werden.
    });

    // (4) Alle Methoden geben ein Observable zurück, das wir mit subscribe() abonnieren müssen.
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { headers });
  }
}
