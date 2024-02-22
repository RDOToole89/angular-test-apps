import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  addBook(book: Book): Observable<Book> {
    // Set error to true to simulate an error.
    const error = false;

    if (error) {
      return throwError(()=> new Error('Error adding book'));
    }

    // Add the book to the database and return an observable of the book.
    return of(book);
  }
}
