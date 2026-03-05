import { Component, inject, OnInit } from '@angular/core';
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
  template: `<app-table-books [books]="books"></app-table-books>`,
  standalone: false,
})
export class ListBooksComponent implements OnInit {
  /**
   * Lista de libros obtenida del servicio.
   */
  books: Book[] = [];

  /**
   * Servicio de libros inyectado.
   */
  private booksService = inject(BooksService);

  /**
   * Inicializa el componente y carga los libros.
   *
   * @remarks
   * Se suscribe al método `getAllBooks()` del servicio y
   * asigna los datos recibidos a la propiedad `books`.
   */
  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe({
      next: (books) => this.books = books,
      error: (error) => console.error(error),
    });
  }
}
