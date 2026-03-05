import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BOOKS } from '../../../core/config/books.config';
import { Book } from '../interfaces/books.interface';

/**
 * Servicio para gestionar libros.
 *
 * Se encarga de proporcionar métodos para obtener los libros de la aplicación.
 * Actualmente devuelve un listado de libros de ejemplo definidos en `BOOKS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los libros.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private booksService: BooksService) {}
 *
 * ngOnInit() {
 *   this.booksService.getAllBooks().subscribe(books => {
 *     console.log(books);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  /**
   * Obtiene todos los libros disponibles.
   *
   * @returns Observable que emite el arreglo de libros.
   *
   * @example
   * ```ts
   * this.booksService.getAllBooks().subscribe(books => {
   *   this.booksList = books;
   * });
   * ```
   */
  getAllBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
}