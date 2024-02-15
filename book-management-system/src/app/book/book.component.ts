import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  bookTitle: string = '';
  bookAuthor: string = '';
  books: Book[] = [];

  ngOnInit() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  addBook() {
    if (this.bookTitle.trim().length && this.bookAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.bookTitle,
        author: this.bookAuthor
      }

      this.books.push(newBook);
      this.bookTitle = '';
      this.bookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(book: Book) {
    this.books = this.books.filter(b => b.id !== book.id);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}