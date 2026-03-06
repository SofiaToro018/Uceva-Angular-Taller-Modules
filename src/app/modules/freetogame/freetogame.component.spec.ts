import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { FreeToGameComponent } from './freetogame.component';
import { FreeToGameService } from './services/freetogame.service';
import { FreeToGame } from './interfaces/freetogame';

const mockGames: FreeToGame[] = [
    {
      id: 1,
      title: 'Overwatch 2',
      thumbnail: 'https://example.com/overwatch2.jpg',
      short_description: 'A free-to-play shooter',
      game_url: 'https://example.com/overwatch2',
      genre: 'Shooter',
      platform: 'PC (Windows)',
      publisher: 'Activision Blizzard',
      developer: 'Blizzard Entertainment',
      release_date: '2022-10-04',
      freetogame_profile_url: 'https://example.com/profile/overwatch2',
    },
    {
      id: 2,
      title: 'Genshin Impact',
      thumbnail: 'https://example.com/genshin.jpg',
      short_description: 'An open-world RPG',
      game_url: 'https://example.com/genshin',
      genre: 'MMORPG',
      platform: 'PC (Windows)',
      publisher: 'miHoYo',
      developer: 'miHoYo',
      release_date: '2020-09-28',
      freetogame_profile_url: 'https://example.com/profile/genshin',
    }
  ];

describe('FreeToGameComponent', () => {
  let component: FreeToGameComponent;
  let fixture: ComponentFixture<FreeToGameComponent>;
  let freeToGameService: FreeToGameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeToGameComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeToGameComponent);
    component = fixture.componentInstance;
    // Obtener el servicio desde el injector del componente, ya que tiene providers propios
    freeToGameService = fixture.debugElement.injector.get(FreeToGameService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getGames al iniciar', () => {
    const spyGetGames = jest.spyOn(freeToGameService, 'getGames').mockReturnValue(of(mockGames));
    fixture.detectChanges();
    expect(spyGetGames).toHaveBeenCalled();
  });

  it('debería manejar el error al obtener los juegos', () => {
    jest.spyOn(freeToGameService, 'getGames').mockReturnValue(throwError(() => new Error('Error al obtener juegos')));
    fixture.detectChanges();
    expect(component.error).toBe('Error al obtener juegos');
  });
});
