/**
 * Representa una película en el sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de datos para las películas
 * que se mostrarán en las tablas y componentes de la aplicación.
 *
 * @example
 * ```ts
 * const movie: Movie = {
 *   id: 1,
 *   title: 'El Padrino',
 *   director: 'Francis Ford Coppola',
 *   year: 1972,
 *   genre: 'Drama'
 * };
 * ```
 */
export interface Movie {
  /**
   * Identificador único de la película.
   */
  id: number;

  /**
   * Título de la película.
   */
  title: string;

  /**
   * Director de la película.
   */
  director: string;

  /**
   * Año de estreno de la película.
   */
  year: number;

  /**
   * Género de la película.
   */
  genre: MovieGenre;
}

/**
 * Tipos de géneros de películas disponibles.
 */
export type MovieGenre = 'Drama' | 'Crimen' | 'Ciencia Ficción' | 'Acción' | 'Comedia' | 'Terror' | 'Aventura';