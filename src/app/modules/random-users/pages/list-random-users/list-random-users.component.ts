import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from '../../services/random-users.service';
import { RandomUser } from '../../interface/random-users';

/**
 * Componente de página que lista los usuarios aleatorios.
 *
 * @remarks
 * Se encarga de consumir el servicio `RandomUsersService` para obtener
 * los usuarios desde la API externa y pasarlos al componente
 * `TableRandomUsersComponent` para su visualización en tabla.
 *
 * Forma parte de la capa de presentación del módulo `RandomUsersModule`.
 *
 * @example
 * ```html
 * <app-list-random-users></app-list-random-users>
 * ```
 */
@Component({
  selector: 'app-list-random-users',
  templateUrl: './list-random-users.component.html',
  standalone: false,
})
export class ListRandomUsersComponent implements OnInit {

  /**
   * Lista de usuarios obtenidos desde la API.
   */
  users: RandomUser[] = [];

  /**
   * Constructor del componente.
   *
   * @param usersService - Servicio para consumir la API de usuarios aleatorios.
   */
  constructor(private usersService: RandomUsersService) {}

  /**
   * Se ejecuta al iniciar el componente.
   *
   * @remarks
   * Llama al servicio para obtener los usuarios desde la API
   * y los asigna a la propiedad `users`.
   */
  ngOnInit(): void {
    this.usersService.getUsers().subscribe(response => {
      this.users = response.results;
    });
  }

}
