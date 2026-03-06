import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomUserResponse } from '../interface/random-users';

/**
 * Servicio encargado de consumir la API externa RandomUser.
 *
 * @remarks
 * Utiliza `HttpClient` para realizar peticiones GET a la API
 * {@link https://randomuser.me/api/} y obtener usuarios aleatorios.
 * Está registrado como servicio global con `providedIn: 'root'`.
 *
 * @example
 * ```typescript
 * constructor(private usersService: RandomUsersService) {}
 *
 * this.usersService.getUsers().subscribe(response => {
 *   console.log(response.results);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  /**
   * URL base de la API RandomUser.
   *
   * @remarks
   * Solicita 10 usuarios aleatorios por defecto.
   */
  private apiUrl = 'https://randomuser.me/api/?results=10';

  /**
   * Constructor del servicio.
   *
   * @param http - Cliente HTTP de Angular para realizar peticiones.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene una lista de usuarios aleatorios desde la API.
   *
   * @returns Observable con la respuesta de la API que contiene los usuarios.
   */
  getUsers(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>(this.apiUrl);
  }

}




