import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Book } from '../../interfaces/books.interface';

/**
 * Componente de tabla de libros.
 *
 * Se utiliza para mostrar un listado de libros en una tabla,
 * mostrando información como título, autor, ISBN y precio.
 *
 * @remarks
 * Este componente recibe los libros desde un componente padre
 * a través del Input `books` y utiliza badges de colores para
 * resaltar visualmente el ISBN según el autor.
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
  templateUrl: './table-books.component.html',
  standalone: false,
})
export class TableBooksComponent {
  /**
   * Lista de libros a mostrar en la tabla.
   *
   * @remarks
   * Este Input recibe los datos desde el componente padre
   * y los renderiza en formato de tabla HTML.
   */
  @Input() books: Book[] = [];

  /**
   * Mapeo de autores a tipos de Badge.
   *
   * @remarks
   * Se utiliza para asignar colores de badges a los ISBNs según el autor:
   * - 'Gabriel García Márquez' → 'success' (verde)
   * - 'Miguel de Cervantes' → 'primary' (azul)
   * - 'George Orwell' → 'danger' (rojo)
   * - 'Antoine de Saint-Exupéry' → 'info' (celeste)
   * - 'J.K. Rowling' → 'warning' (amarillo)
   * - Otros autores → 'secondary' (gris)
   *
   * Esto permite identificar visualmente libros del mismo autor.
   */
  getAuthorBadgeType(author: string): BadgeType {
    const authorMap: Record<string, BadgeType> = {
      'Gabriel García Márquez': 'success',
      'Miguel de Cervantes': 'primary',
      'George Orwell': 'danger',
      'Antoine de Saint-Exupéry': 'info',
      'J.K. Rowling': 'warning'
    };
    return authorMap[author] || 'secondary';
  }
}
