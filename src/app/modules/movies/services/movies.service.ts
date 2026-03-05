import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOVIES } from '../../../core/config/movies.config';
import { Movie } from '../interface/movies.interface';

/**
 * Servicio para gestionar películas.
 *
 * Se encarga de proporcionar métodos para obtener las películas de la aplicación.
 * Actualmente devuelve un listado de películas de ejemplo definidas en `MOVIES`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a las películas.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private moviesService: MoviesService) {}
 *
 * ngOnInit() {
 *   this.moviesService.getAllMovies().subscribe(movies => {
 *     console.log(movies);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  /**
   * Obtiene todas las películas disponibles.
   *
   * @returns Observable que emite el arreglo de películas.
   *
   * @example
   * ```ts
   * this.moviesService.getAllMovies().subscribe(movies => {
   *   this.moviesList = movies;
   * });
   * ```
   */
  getAllMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
