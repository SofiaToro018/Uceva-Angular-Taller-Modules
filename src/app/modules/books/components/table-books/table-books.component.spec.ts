import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BOOKS } from '../../../../core/config/books.config';
import { TableBooksComponent } from './table-books.component';

describe('TableBooksComponent', () => {
  let component: TableBooksComponent;
  let fixture: ComponentFixture<TableBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBooksComponent);
    component = fixture.componentInstance;
    component.books = BOOKS;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada libro', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.books.length);
  });

  it('debería mostrar los datos del libro en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const book = component.books[index];
      const bookPrice = new CurrencyPipe('en-US').transform(book.price);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(book.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(book.title);
      expect(columns[2].nativeElement.textContent.trim()).toBe(book.author);
      expect(columns[3].nativeElement.textContent.trim()).toBe(book.isbn);
      expect(columns[4].nativeElement.textContent.trim()).toBe(bookPrice);
    });
  });
});
