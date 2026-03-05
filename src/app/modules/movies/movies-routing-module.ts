import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';

const routes: Routes = [
  {
    path: 'list-movies',
    component: ListMoviesComponent
  },
  {
    path: '**',
    redirectTo: 'list-movies'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
