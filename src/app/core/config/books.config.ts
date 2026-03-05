import { Book } from "../../modules/books/interfaces/books.interface";

/**
 * Listado de libros disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de libros, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Book[]}
 */
export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    isbn: '978-0307474728',
    price: 45000
  },
  {
    id: 2,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    isbn: '978-8420412146',
    price: 38000
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0451524935',
    price: 32000
  },
  {
    id: 4,
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
    isbn: '978-0156012195',
    price: 25000
  },
  {
    id: 5,
    title: 'Crónica de una muerte anunciada',
    author: 'Gabriel García Márquez',
    isbn: '978-0307387380',
    price: 35000
  },
  {
    id: 6,
    title: 'El amor en los tiempos del cólera',
    author: 'Gabriel García Márquez',
    isbn: '978-0307387738',
    price: 42000
  },
  {
    id: 7,
    title: 'Harry Potter y la piedra filosofal',
    author: 'J.K. Rowling',
    isbn: '978-8478884452',
    price: 48000
  },
];