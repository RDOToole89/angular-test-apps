import { Component } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {


  books$: Observable<Book[]>;

  constructor(private store: Store<{books: Book[]}>){
    // Select the books from the store and assign them to the books$ observable.
    // store.pipe(select('books')) returns an observable of the books in the store.
    this.books$ = store.pipe(select('books'));
   }

  // Add a book to the store by dispatching an action to the store with the type 'AddBook' and the payload of the book's id, title, and author.
  addBook(id: string, title: string, author: string) {
    this.store.dispatch({
      type: 'AddBook',
      payload: { id, title, author }
    });
  }

  removeBook(id: string) {
    this.store.dispatch({
      type: 'RemoveBook',
      payload: id
    });
  }
}
