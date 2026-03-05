import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { BOOKS } from '../../../core/config/books.config';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  it('getAllBooks debería retornar un observable con los libros', (done) => {
    service.getAllBooks().subscribe(books => {
      expect(books).toEqual(BOOKS);
      expect(books.length).toBe(BOOKS.length);
      done();
    });
  });
});
