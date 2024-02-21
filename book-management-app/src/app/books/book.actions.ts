import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// The createAction function is used to create an action. The first argument is the action name, and the second argument is a props function that defines the payload of the action.
export const AddBook = createAction('[Book] Add', props<Book>());
export const RemoveBook = createAction('[Book] Add', props<{bookId: string}>());

