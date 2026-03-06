import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing-module';
import { TableBooksComponent } from './components/table-books/table-books.component';
import { ListBooksComponent } from './pages/list-books/list-books.component';

/**
 * Módulo de gestión de libros.
 *
 * Este módulo encapsula toda la funcionalidad relacionada con la gestión
 * y visualización de libros en la aplicación.
 *
 * @remarks
 * Incluye componentes para listar y mostrar libros en tablas,
 * así como su configuración de rutas mediante lazy loading.
 *
 * Componentes declarados:
 * - {@link BooksComponent} - Componente contenedor principal
 * - {@link ListBooksComponent} - Página de listado de libros
 * - {@link TableBooksComponent} - Tabla de libros
 *
 * @example
 * Importación en AppRoutingModule:
 * ```ts
 * {
 *   path: 'books',
 *   loadChildren: () => import('./modules/books/books-module').then(m => m.BooksModule)
 * }
 * ```
 */
@NgModule({
  declarations: [
    BooksComponent,
    ListBooksComponent,
    TableBooksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
