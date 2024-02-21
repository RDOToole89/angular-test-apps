import { Book } from './models/book';


// The AppState interface is used to define the structure of the state object in the app.
export interface AppState {
  readonly book: Book[];
}
