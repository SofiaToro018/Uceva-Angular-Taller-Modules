import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './pages/list-books/list-books.component'; 

const routes: Routes = [
  {
    path: 'list-books',
    component: ListBooksComponent
  },
  {
    path: '**',
    redirectTo: 'list-books'
  }
];
   
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
