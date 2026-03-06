import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableRandomUsersComponent } from './table-random-users.component';
import { RandomUser } from '../../interface/random-users';

const MOCK_USERS: RandomUser[] = [
  {
    gender: 'male',
    email: 'john@example.com',
    phone: '123-456-7890',
    nat: 'US',
    name: { title: 'Mr', first: 'John', last: 'Doe' },
    location: { city: 'New York', state: 'NY', country: 'United States' },
    picture: { large: 'lg.jpg', medium: 'md.jpg', thumbnail: 'th.jpg' }
  },
  {
    gender: 'female',
    email: 'jane@example.com',
    phone: '098-765-4321',
    nat: 'GB',
    name: { title: 'Ms', first: 'Jane', last: 'Smith' },
    location: { city: 'London', state: 'England', country: 'United Kingdom' },
    picture: { large: 'lg2.jpg', medium: 'md2.jpg', thumbnail: 'th2.jpg' }
  }
];

describe('TableRandomUsersComponent', () => {
  let component: TableRandomUsersComponent;
  let fixture: ComponentFixture<TableRandomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRandomUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRandomUsersComponent);
    component = fixture.componentInstance;
    component.users = MOCK_USERS;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada usuario', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(MOCK_USERS.length);
  });

  it('debería mostrar los datos del usuario en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('td'));
      const user = MOCK_USERS[index];

      const img = columns[0].query(By.css('img'));
      expect(img.nativeElement.getAttribute('src')).toBe(user.picture.thumbnail);
      expect(columns[1].nativeElement.textContent.trim()).toBe(`${user.name.first} ${user.name.last}`);
      expect(columns[2].nativeElement.textContent.trim()).toBe(user.email);
      expect(columns[3].nativeElement.textContent.trim()).toBe(user.phone);
      expect(columns[4].nativeElement.textContent.trim()).toBe(user.location.country);
    });
  });

  it('debería mostrar la foto del usuario con ancho de 40px', () => {
    const img = fixture.debugElement.query(By.css('tbody tr td img'));
    expect(img.nativeElement.getAttribute('width')).toBe('40');
  });
});
