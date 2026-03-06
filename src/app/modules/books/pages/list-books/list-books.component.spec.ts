import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { BOOKS } from '../../../../core/config/books.config';
import { TableBooksComponent } from '../../components/table-books/table-books.component';
import { BooksService } from '../../services/books.service';
import { ListBooksComponent } from './list-books.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

describe('ListBooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;
  let booksService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBooksComponent, TableBooksComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllBooks al iniciar', () => {
    const spyGetAllBooks = jest.spyOn(booksService, 'getAllBooks').mockReturnValue(of(BOOKS));
    fixture.detectChanges();
    expect(spyGetAllBooks).toHaveBeenCalled();
  });

  it('debería asignar los libros recibidos del servicio', () => {
    jest.spyOn(booksService, 'getAllBooks').mockReturnValue(of(BOOKS));
    fixture.detectChanges();
    expect(component.books).toEqual(BOOKS);
  });

  it('debería pasar los libros al componente table-books', () => {
    jest.spyOn(booksService, 'getAllBooks').mockReturnValue(of(BOOKS));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableBooksComponent))
      .componentInstance;
    expect(tableComponent.books).toEqual(BOOKS);
  });

  it('debería manejar el error cuando falla getAllBooks', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(booksService, 'getAllBooks').mockReturnValue(throwError(() => new Error('Error')));
    fixture.detectChanges();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
