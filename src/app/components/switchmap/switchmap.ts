import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  of
} from 'rxjs';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-switchmap',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switchmap.html',
  styleUrl: './switchmap.css',
})
export class Switchmap implements OnInit {

  users: User[] = [];

  private searchSubject = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.searchSubject.pipe(

      // Wait 500ms after user stops typing
      debounceTime(500),

      // Don't call API if same value is entered
      distinctUntilChanged(),

      // Cancel previous API request
      switchMap(searchText => {

        if (!searchText.trim()) {
          return of([]);
        }

        return this.http.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        ).pipe(
          catchError(() => of([]))
        );

      })

    ).subscribe(users => {

      this.users = users;

    });
  }

  onSearch(searchText: string): void {
    this.searchSubject.next(searchText);
  }
}