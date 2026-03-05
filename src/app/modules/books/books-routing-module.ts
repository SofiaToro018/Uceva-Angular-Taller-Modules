import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './pages/list-books/list-books.component';

/**
 * Configuración de rutas del módulo de libros.
 *
 * Define las rutas específicas para la navegación dentro del módulo Books.
 *
 * @remarks
 * Este módulo de ruteo se carga de forma diferida (lazy loading) desde
 * el módulo principal de la aplicación.
 *
 * Rutas configuradas:
 * - `/books/list-books` - Lista de libros
 * - `**` - Redirección por defecto a list-books
 *
 * @example
 * Navegación a la lista de libros:
 * ```html
 * <a routerLink="/books/list-books">Ver libros</a>
 * ```
 */
const routes: Routes = [
  {
    path: 'list-books',
    component: ListBooksComponent
  },
  {
    path: '**',
    redirectTo: 'list-books'
  }
];

/**
 * Módulo de enrutamiento para libros.
 *
 * @remarks
 * Utiliza `RouterModule.forChild()` ya que es un módulo hijo
 * cargado mediante lazy loading.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
