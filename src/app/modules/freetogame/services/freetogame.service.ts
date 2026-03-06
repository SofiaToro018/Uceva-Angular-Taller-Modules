import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FreeToGame } from '../interfaces/freetogame';

/**
 * Servicio encargado de consumir la API pública de FreeToGame.
 * 
 * Aquí se centralizan todas las llamadas HTTP relacionadas con los juegos.
 * Esto permite reutilizar la lógica de acceso a datos en diferentes
 * componentes del módulo.
 */
@Injectable({
  providedIn: 'root'
})
export class FreeToGameService {

  /**
   * URL base de la API que devuelve la lista de juegos gratuitos.
   */
  private apiUrl = 'https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games';

  /**
   * Constructor que inyecta HttpClient
   * para poder realizar peticiones HTTP.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de juegos desde la API.
   * 
   * @returns Observable con un arreglo de juegos.
   */
  getGames(): Observable<FreeToGame[]> {
    return this.http.get<FreeToGame[]>(this.apiUrl);
  }
}