import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForOf, SlicePipe } from '@angular/common';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-06-http',
  standalone: true,
  imports: [NgForOf, SlicePipe],
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  posts: Post[] = [];

  constructor(private httpService: HttpService) {} // (3) Der Service wird über Dependency Injection verwendet.

  ngOnInit(): void {
    // (4) Das Observable wird abonniert, um die Daten zu erhalten.
    this.httpService.getData().subscribe({
      next: data => (this.posts = data),
      error: err => console.error('Error: ', err),
    });
  }
}
