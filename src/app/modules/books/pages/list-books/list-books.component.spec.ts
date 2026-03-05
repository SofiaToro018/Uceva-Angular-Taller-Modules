import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { BOOKS } from '../../../../core/config/books.config';
import { TableBooksComponent } from '../../components/table-books/table-books.component';
import { BooksService } from '../../services/books.service';
import { ListBooksComponent } from './list-books.component';

describe('ListBooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;
  let booksService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBooksComponent, TableBooksComponent]
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
});
