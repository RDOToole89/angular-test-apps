import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

  // Create an effect that listens for the 'AddBook' action and calls the addBook method of the bookService.
  addBook$ = createEffect(() => this.actions$.pipe(
    // ofType is an operator that filters the actions observable to only include actions of a certain type.
    ofType(bookActions.AddBook), 
    // mergeMap is an operator that maps each action to an observable and then flattens those observables into a single observable.
    mergeMap((action) => this.bookService.addBook(action)
    // map is an operator that maps the value of the observable to a new value.
    .pipe(
      // map the book returned by the bookService to an AddBookSuccess action.
      map(book => bookActions.AddBookSuccess(book)),
      // catchError is an operator that catches errors in the observable and returns a new observable.
      catchError(error => of(bookActions.AddBookFailure({error})))
    ))
  ));

  constructor(
    private actions$: Actions, 
    private bookService: BookService
  ) {}
}