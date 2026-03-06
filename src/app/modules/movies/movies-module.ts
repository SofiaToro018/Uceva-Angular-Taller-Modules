import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing-module';
import { MoviesComponent } from './movies.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { TableMoviesComponent } from './components/table-movies/table-movies.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    MoviesComponent,
    ListMoviesComponent,
    TableMoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
