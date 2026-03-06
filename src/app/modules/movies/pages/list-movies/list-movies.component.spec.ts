import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMoviesComponent } from './list-movies.component';
import { MoviesService } from '../../services/movies.service';
import { TableMoviesComponent } from '../../components/table-movies/table-movies.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { MOVIES } from '../../../../core/config/movies.config';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;
  let moviesService : MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMoviesComponent, TableMoviesComponent, BadgeComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllMovies al iniciar', () => {
    const spyGetAllMovies = jest.spyOn(moviesService, 'getAllMovies').mockReturnValue(of([]));
    fixture.detectChanges();
    expect(spyGetAllMovies).toHaveBeenCalled();
  });

  it('debería asignar las películas recibidas del servicio', () => {    
    jest.spyOn(moviesService, 'getAllMovies').mockReturnValue(of(MOVIES));
    fixture.detectChanges();
    expect(component.movies).toEqual(MOVIES);
  });

  it('debería pasar las películas al componente table-movies', () => {    
    jest.spyOn(moviesService, 'getAllMovies').mockReturnValue(of(MOVIES));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableMoviesComponent))
      .componentInstance;
    expect(tableComponent.movies).toEqual(MOVIES);
  }); 
  
  it('debería manejar el error cuando falla getAllMovies', () => {
    component.movies = [];
    const errorResponse = new Error('Error al cargar películas');   

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(moviesService, 'getAllMovies').mockReturnValue(of([]));

    fixture.detectChanges();

    expect(moviesService.getAllMovies).toHaveBeenCalled();
    expect(component.movies).toEqual([]);
  });
});
