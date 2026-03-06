import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ListRandomUsersComponent } from './list-random-users.component';
import { TableRandomUsersComponent } from '../../components/table-random-users/table-random-users.component';
import { RandomUsersService } from '../../services/random-users.service';
import { RandomUser, RandomUserResponse } from '../../interface/random-users';

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

describe('ListRandomUsersComponent', () => {
  let component: ListRandomUsersComponent;
  let fixture: ComponentFixture<ListRandomUsersComponent>;
  let usersService: RandomUsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRandomUsersComponent, TableRandomUsersComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRandomUsersComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(RandomUsersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getUsers al iniciar', () => {
    const spyGetUsers = jest.spyOn(usersService, 'getUsers').mockReturnValue(of(MOCK_RESPONSE));
    fixture.detectChanges();
    expect(spyGetUsers).toHaveBeenCalled();
  });

  it('debería asignar los usuarios recibidos del servicio', () => {
    jest.spyOn(usersService, 'getUsers').mockReturnValue(of(MOCK_RESPONSE));
    fixture.detectChanges();
    expect(component.users).toEqual(MOCK_USERS);
  });

  it('debería pasar los usuarios al componente table-random-users', () => {
    jest.spyOn(usersService, 'getUsers').mockReturnValue(of(MOCK_RESPONSE));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableRandomUsersComponent))
      .componentInstance;
    expect(tableComponent.users).toEqual(MOCK_USERS);
  });

  it('debería inicializar users como un arreglo vacío', () => {
    expect(component.users).toEqual([]);
  });
});
