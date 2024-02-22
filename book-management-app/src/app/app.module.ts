import { BookReducer } from './books/book.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './book-list/book-list.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // The StoreModule.forRoot function is used to register the BookReducer with the NgRx Store. The BookReducer is the reducer that takes care of the book state.
    StoreModule.forRoot<AppState>({book: BookReducer}),
    // The EffectsModule.forRoot function is used to register the BookEffects with the NgRx Effects.
    EffectsModule.forRoot([BookEffects]),
    //  The StoreDevtoolsModule.instrument function is used to enable the NgRx DevTools.
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
