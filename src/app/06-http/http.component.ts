import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-06-http',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent implements OnInit {
  posts: never[] = [];

  constructor(private httpService: HttpService) {} // (3) Der Service wird über Dependency Injection verwendet.

  ngOnInit(): void {
    // (4) Das Observable wird abonniert, um die Daten zu erhalten.
    this.httpService.getData().subscribe({
      next: data => (this.posts = data),
      error: err => console.error('Error: ', err),
    });
  }
}
