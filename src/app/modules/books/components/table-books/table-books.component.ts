import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/books.interface';

/**
 * Componente de tabla de libros.
 *
 * Se utiliza para mostrar un listado de libros en una tabla,
 * mostrando información como título, autor, ISBN y precio.
 *
 * @remarks
 * Este componente recibe los libros desde un componente padre
 * a través del Input `books`.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-books [books]="booksList"></app-table-books>
 * ```
 */
@Component({
  selector: 'app-table-books',
  standalone: false,
  templateUrl: './table-books.component.html',

})
export class TableBooks {
/**
   * Lista de libros a mostrar en la tabla.
   *
   * @remarks
   * Este Input recibe los datos desde el componente padre
   * y los renderiza en formato de tabla HTML.
   */
  @Input() books: Book[] = [];
}
