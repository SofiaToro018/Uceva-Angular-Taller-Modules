import { Component, Input } from '@angular/core';
import { RandomUser } from '../../interface/random-users';

/**
 * Componente de tabla para mostrar los usuarios aleatorios.
 *
 * @remarks
 * Recibe la lista de usuarios desde el componente padre
 * `ListRandomUsersComponent` a través del Input `users`
 * y los renderiza en una tabla HTML con foto, nombre, email,
 * teléfono y país.
 *
 * Forma parte de la capa de presentación como un **organismo**
 * dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-random-users [users]="usersList"></app-table-random-users>
 * ```
 */
@Component({
  selector: 'app-table-random-users',
  templateUrl: './table-random-users.component.html',
  standalone: false,
})
export class TableRandomUsersComponent {

  /**
   * Lista de usuarios aleatorios a mostrar en la tabla.
   *
   * @remarks
   * Recibe los datos desde el componente padre mediante property binding.
   */
  @Input() users: RandomUser[] = [];

}
