import { Component, inject } from '@angular/core';
import { Movie } from '../../interface/movies.interface';
import { MoviesService } from '../../services/movies.service';
/**
 * Componente contenedor de películas.
 *
 * Se utiliza para gestionar y mostrar un listado de películas
 * utilizando el componente `TableMoviesComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `MoviesService`
 * para obtener las películas y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-movies></app-list-movies>
 * ```
 */
@Component({
  selector: 'app-list-movies',
  template: `<app-table-movies [movies]="movies"></app-table-movies>`,
  standalone: false,
})
export class ListMoviesComponent {
  /**
   * Servicio de películas inyectado.
   */
  private moviesService = inject(MoviesService);

  /**
   * Lista de películas obtenida del servicio.
   */
  movies: Movie[] = [];

  /**
   * Constructor del componente.
   *
   * @remarks
   * Obtiene las películas del servicio al inicializar el componente.
   */
  constructor() {
    this.moviesService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

}
