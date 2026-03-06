import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/books/books-module').then(m => m.BooksModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/movies/movies-module').then(m => m.MoviesModule)
  },
  {
    path: 'random-users',
    loadChildren: () => import('./modules/random-users/random-users-module').then(m => m.RandomUsersModule)
  },
  {
    path: '**',
    redirectTo: 'users'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
