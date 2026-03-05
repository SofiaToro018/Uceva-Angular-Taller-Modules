import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing-module';
import { ListBooks } from './pages/list-books/list-books';
import { TableBooks } from './components/table-books/table-books';
import { Books } from '../books';


@NgModule({
  declarations: [
    ListBooks,
    TableBooks,
    Books
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
