import { Component, OnInit } from '@angular/core';

import { NgForOf } from '@angular/common';
import { HttpService } from '../06-http/http.service';
import { Post } from '../06-http/http.component'; // Importiere NgForOf aus dem CommonModule

@Component({
  selector: 'app-08-interceptors',
  standalone: true,
  imports: [NgForOf], // Stelle sicher, dass NgForOf in den imports ist
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.css'],
})
export class InterceptorsComponent implements OnInit {
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
