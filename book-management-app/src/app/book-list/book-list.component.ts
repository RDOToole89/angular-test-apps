import { AddBook, RemoveBook } from './../books/book.actions';
import { Component } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  // Create an observable of the books in the store.
  books$: Observable<Book[]>;

  // AppState is the interface that defines the structure of the state object in the app.
  constructor(private store: Store<AppState>){
    // Select the books from the store and assign them to the books$ observable.
    // store.pipe(select('books')) returns an observable of the books in the store.
    this.books$ = store.pipe(select('book'));
   }

  // Add a book to the store by dispatching an action to the store with the type 'AddBook' and the payload of the book's id, title, and author.
  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({bookId}));
  }
}
