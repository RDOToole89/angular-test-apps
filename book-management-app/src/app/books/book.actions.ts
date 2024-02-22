import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// The createAction function is used to create an action. The first argument is the action name, and the second argument is a props function that defines the payload of the action.
export const AddBook = createAction('[Book] Add Book', props<Book>());

// The AddBookSuccess and AddBookFailure actions are used to handle the success and failure of adding a book to the store.
export const AddBookSuccess = createAction('[Book] Added Book', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{error: any}>());


export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());

