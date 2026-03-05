import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { MovieGenre, Movies} from '../../interface/movies.interface';

/**
 * Componente de tabla de películas.
 *
 * Se utiliza para mostrar un listado de películas en una tabla,
 * mostrando información como título, director, año y género.
 *
 * @remarks
 * Este componente recibe las películas desde un componente padre
 * a través del Input `movies` y utiliza el mapeo `genreMap`
 * para asignar colores a los badges según el género.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-movies [movies]="moviesList"></app-table-movies>
 * ```
 */
@Component({
  selector: 'app-table-movies',
  templateUrl: './table-movies.component.html',
  standalone: false,
})
export class TableMoviesComponent {
  /**
   * Lista de películas a mostrar en la tabla.
   *
   * @remarks
   * Este Input recibe los datos desde el componente padre
   * y los renderiza en formato de tabla HTML.
   */
  @Input() movies: Movies[] = [];

  /**
   * Mapeo de géneros de películas a tipos de badge.
   *
   * @remarks
   * Permite asignar un color visual distintivo a cada género
   * mediante el componente `BadgeComponent`.
   */
  genreMap: Record<MovieGenre, BadgeType> = {
    'Drama': 'primary',
    'Crimen': 'danger',
    'Ciencia Ficción': 'info',
    'Acción': 'warning',
    'Comedia': 'success',
    'Terror': 'dark',
    'Aventura': 'secondary'
  };

}
