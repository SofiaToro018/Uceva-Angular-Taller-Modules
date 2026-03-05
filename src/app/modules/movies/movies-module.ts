import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing-module';
import { TableMovies } from './components/table-movies/table-movies.component';
import { TableMoviesComponent } from './components/table-movies.component/table-movies.component';
import { ListMovies } from './pages/list-movies/list-movies.component';
import { Movies } from '../movies';


@NgModule({
  declarations: [
    TableMovies,
    TableMoviesComponent,
    ListMovies,
    Movies
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
