import { Movies } from "../../modules/movies/interface/movies.interface";

/**
 * Listado de películas disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de películas, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Movies[]}
 */
export const MOVIES: Movies[] = [
  {
    id: 1,
    title: 'El Padrino',
    director: 'Francis Ford Coppola',
    year: 1972,
    genre: 'Drama'
  },
  {
    id: 2,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    genre: 'Crimen'
  },
  {
    id: 3,
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Ciencia Ficción'
  },
  {
    id: 4,
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    genre: 'Drama'
  },
  {
    id: 5,
    title: 'El Caballero de la Noche',
    director: 'Christopher Nolan',
    year: 2008,
    genre: 'Acción'
  },
  {
    id: 6,
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia Ficción'
  },
  {
    id: 7,
    title: 'Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    year: 1999,
    genre: 'Ciencia Ficción'
  },
];