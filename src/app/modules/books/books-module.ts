import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-module'; 
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing-module';
import { TableBooksComponent } from './components/table-books/table-books.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';


@NgModule({
  declarations: [
    BooksComponent,
    ListBooksComponent,
    TableBooksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
