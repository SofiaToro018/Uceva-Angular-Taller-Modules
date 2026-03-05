import { Component, inject } from '@angular/core';
import { Book  } from '../../interfaces/books.interface';
import { BooksService } from '../../services/books.service';

/**
 * Componente contenedor de libros.
 *
 * Se utiliza para gestionar y mostrar un listado de libros
 * utilizando el componente `TableBooksComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `BooksService`
 * para obtener los libros y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-books></app-list-books>
 * ```
 */
@Component({
  selector: 'app-list-books',
  standalone: false,
  templateUrl: './list-books.html',
})
export class ListBooks {
/**
   * Servicio de libros inyectado.
   */
  private booksService = inject(BooksService);

  /**
   * Lista de libros obtenida del servicio.
   */
  books: Book[] = [];

  /**
   * Constructor del componente.
   *
   * @remarks
   * Obtiene los libros del servicio al inicializar el componente.
   */
  constructor() {
    this.booksService.getAllBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
