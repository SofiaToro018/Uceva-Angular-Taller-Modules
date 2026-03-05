/**
 * Representa un libro en el sistema.
 *
 * @remarks
 * Esta interfaz define la estructura de datos para los libros
 * que se mostrarán en las tablas y componentes de la aplicación.
 *
 * @example
 * ```ts
 * const book: Book = {
 *   id: 1,
 *   title: 'Cien años de soledad',
 *   author: 'Gabriel García Márquez',
 *   isbn: '978-0307474728',
 *   price: 45000
 * };
 * ```
 */
export interface Book {
  /**
   * Identificador único del libro.
   */
  id: number;

  /**
   * Título del libro.
   */
  title: string;

  /**
   * Autor del libro.
   */
  author: string;

  /**
   * Código ISBN del libro.
   */
  isbn: string;

  /**
   * Precio del libro en pesos colombianos.
   */
  price: number;
}