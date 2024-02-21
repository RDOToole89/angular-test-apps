import { createReducer, on } from '@ngrx/store';
import { AddBook, RemoveBook } from './book.actions';
import { Book } from '../models/book';

// A reducer is a function that takes the current state and an action and returns a new state. The createReducer function is used to create a reducer. The first argument is the initial state, and the second argument is a list of action handlers.

// A Reducer only takes care of a segment of the state. In this case, the BookReducer only takes care of the book state.

export const initialState: ReadonlyArray<Book> = [];

// Reducers are immutable, meaning that they don't change the current state. Instead, they return a new state. This is why the spread operator is used to create a new array with the current state and the new book.
export const BookReducer = createReducer(
  initialState,
  // The on function is used to define an action handler. The first argument is the action, and the second argument is a function that takes the current state and the action payload and returns the new state.
  on(AddBook, (state, { id, title, author }) => {
    // The spread operator is used to create a new array with the current state and the new book.
    return [...state, { id, title, author }];
  }),
  on(RemoveBook, (state, { bookId }) => {
    // The filter function is used to create a new array with all the books except the one with the specified id.
    return state.filter((book) => book.id !== bookId);
  })
);
