import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableMoviesComponent } from './table-movies.component';
import { MOVIES } from '../../../../core/config/movies.config';
import { By } from '@angular/platform-browser';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { CurrencyPipe } from '@angular/common';

describe('TableMoviesComponent', () => {
  let component: TableMoviesComponent;
  let fixture: ComponentFixture<TableMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMoviesComponent, BadgeComponent, CurrencyPipe],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMoviesComponent);
    component = fixture.componentInstance;
    component.movies = MOVIES
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada película', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.movies.length);
  });

  it('debería mostrar los datos de la película en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const movie = component.movies[index];
      const movieYear = new CurrencyPipe('en-US').transform(movie.year);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(movie.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(movie.title);
      expect(columns[2].nativeElement.textContent.trim()).toBe(movie.director);
      expect(columns[3].nativeElement.textContent.trim()).toBe(movieYear);
      expect(columns[4].nativeElement.textContent.trim()).toBe(movie.genre);
    });
  });
  it('debería mapear cada género a su BadgeType correcto', () => {
    expect(component.genreMap['Drama']).toBe('primary');
    expect(component.genreMap['Crimen']).toBe('danger');
    expect(component.genreMap['Ciencia Ficción']).toBe('warning');
    expect(component.genreMap['Acción']).toBe('success');
    expect(component.genreMap['Comedia']).toBe('info');
    expect(component.genreMap['Terror']).toBe('dark');
    expect(component.genreMap['Aventura']).toBe('secondary');
  });
});
