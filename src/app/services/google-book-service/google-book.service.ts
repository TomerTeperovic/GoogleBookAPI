import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './types.service';


@Injectable(
  { providedIn: 'root' })
export class GoogleBookService {
  private URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<Book[]> {
    return this.http.get<{ items: Book[] }>(`${this.URL}?q=${query}&maxResults=20&startIndex=0`).pipe(map(books => books.items || []));
  }

  getById(volumeId: string): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/${volumeId}`);
  }
}