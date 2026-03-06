import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { MOVIES } from '../../../core/config/movies.config';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllMovies debería retornar un observable con las películas', (done) => {
    service.getAllMovies().subscribe(movies => {
      expect(movies).toEqual(MOVIES);
      expect(movies.length).toBe(MOVIES.length);
      done();
    });
  });
});
