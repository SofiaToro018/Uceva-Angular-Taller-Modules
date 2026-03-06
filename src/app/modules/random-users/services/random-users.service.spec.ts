import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RandomUsersService } from './random-users.service';
import { RandomUser, RandomUserResponse } from '../interface/random-users';

const MOCK_USERS: RandomUser[] = [
  {
    gender: 'male',
    email: 'john@example.com',
    phone: '123-456-7890',
    nat: 'US',
    name: { title: 'Mr', first: 'John', last: 'Doe' },
    location: { city: 'New York', state: 'NY', country: 'United States' },
    picture: { large: 'lg.jpg', medium: 'md.jpg', thumbnail: 'th.jpg' }
  }
];

const MOCK_RESPONSE: RandomUserResponse = { results: MOCK_USERS };

describe('RandomUsersService', () => {
  let service: RandomUsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RandomUsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers debería retornar un observable con los usuarios', (done) => {
    service.getUsers().subscribe(response => {
      expect(response.results).toEqual(MOCK_USERS);
      expect(response.results.length).toBe(1);
      done();
    });

    const req = httpMock.expectOne('https://randomuser.me/api/?results=10');
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_RESPONSE);
  });

  it('getUsers debería hacer una petición GET a la API correcta', () => {
    service.getUsers().subscribe();

    const req = httpMock.expectOne('https://randomuser.me/api/?results=10');
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_RESPONSE);
  });
});
