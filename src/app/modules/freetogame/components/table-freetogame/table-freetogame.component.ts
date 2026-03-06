import { Component, Input } from '@angular/core';
import { FreeToGame } from '../../interfaces/freetogame';

/**
 * Componente de tabla para mostrar los juegos gratuitos.
 * 
 * @remarks
 * Recibe la lista de juegos desde el componente padre `ListFreeToGameComponent`
 * y los renderiza en una tabla HTML con imagen, título, género, plataforma y fecha de lanzamiento.
 * 
 * Forma parte de la capa de presentación como un **organismo** dentro del sistema de diseño atómico.
 * @example
 * ```html
 * <app-table-freetogame [games]="gamesList"></app-table-freetogame>
 * ```
 */
@Component({
  selector: 'app-table-freetogame',
  templateUrl: './table-freetogame.component.html',
  standalone: false,
})
export class TableFreeToGameComponent {

   /**
   * Lista de juegos gratuitos a renderizar en la tabla.
   * 
   * @remarks
   * Esta propiedad recibe los datos desde el componente padre mediante
   * data binding. Se inicializa como array vacío para evitar errores
   * de referencia nula durante la carga inicial.
   * 
   * @example
   * ```html
   * <app-table-freetogame [games]="myGames"></app-table-freetogame>
   * ```
   */
  @Input() games: FreeToGame[] = [];

}
