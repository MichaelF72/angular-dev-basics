import { Component, OnInit } from '@angular/core';

import { NgForOf } from '@angular/common';
import { HttpService } from '../kapitel-06-http/http.service';
import { Post } from '../kapitel-06-http/kapitel06-http.component'; // Importiere NgForOf aus dem CommonModule

@Component({
  selector: 'app-kapitel-08-interceptors',
  standalone: true,
  imports: [NgForOf], // Stelle sicher, dass NgForOf in den imports ist
  templateUrl: './kapitel08-interceptors.component.html',
  styleUrls: ['./kapitel08-interceptors.component.css'],
})
export class Kapitel08InterceptorsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe({
      next: data => {
        console.log('Response received: ', data);
        this.posts = data;
      },
      error: err => console.error('Error:', err),
    });
  }
}
