import { Component } from '@angular/core';

/**
* Componente contenedor de la sección de libros.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los libros, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-books></app-books>
 * ```
 */
@Component({
  selector: 'app-books',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class BooksComponent { }