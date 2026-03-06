/**
 * Interface que representa un videojuego obtenido desde la API
 * https://www.freetogame.com/api/games
 * 
 * Esta estructura permite tipar los datos que llegan desde el servicio HTTP,
 * facilitando el autocompletado y evitando errores al manipular la información
 * dentro de los componentes de Angular.
 */

export interface FreeToGame {

  /** Identificador único del juego */
  id: number;

  /** Nombre del videojuego */
  title: string;

  /** Imagen miniatura del juego */
  thumbnail: string;

  /** Descripción corta del juego */
  short_description: string;

  /** URL para acceder directamente al juego */
  game_url: string;

  /** Género del videojuego */
  genre: string;

  /** Plataforma donde se puede jugar */
  platform: string;

  /** Empresa que publica el juego */
  publisher: string;

  /** Empresa desarrolladora del juego */
  developer: string;

  /** Fecha de lanzamiento */
  release_date: string;

  /** URL del perfil del juego en FreeToGame */
  freetogame_profile_url: string;
}