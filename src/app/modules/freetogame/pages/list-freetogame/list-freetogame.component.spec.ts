import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ListFreeToGameComponent } from './list-freetogame.component';
import { FreeToGameService } from '../../services/freetogame.service';
import { TableFreeToGameComponent } from '../../components/table-freetogame/table-freetogame.component';
import { FreeToGame } from '../../interfaces/freetogame';

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
    },
  ];

describe('ListFreeToGameComponent', () => {
  let component: ListFreeToGameComponent;
  let fixture: ComponentFixture<ListFreeToGameComponent>;
  let freeToGameService: FreeToGameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFreeToGameComponent, TableFreeToGameComponent],
      imports: [HttpClientTestingModule],
      providers: [FreeToGameService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFreeToGameComponent);
    component = fixture.componentInstance;
    freeToGameService = TestBed.inject(FreeToGameService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getGames al iniciar', () => {
    const spyGetGames = jest.spyOn(freeToGameService, 'getGames').mockReturnValue(of(mockGames));
    fixture.detectChanges();
    expect(spyGetGames).toHaveBeenCalled();
  }); 

  it('debería asignar los juegos recibidos del servicio', () => {
    jest.spyOn(freeToGameService, 'getGames').mockReturnValue(of(mockGames));
    fixture.detectChanges();
    expect(component.games).toEqual(mockGames);
  });

  it('debería pasar los juegos al componente table-freetogame', () => {
    jest.spyOn(freeToGameService, 'getGames').mockReturnValue(of(mockGames));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableFreeToGameComponent))
      .componentInstance;
    expect(tableComponent.games).toEqual(mockGames);
  }); 

  it('debería manejar errores al obtener los juegos', () => {
    const errorMessage = 'Error al obtener los juegos';
    jest.spyOn(freeToGameService, 'getGames').mockReturnValue(throwError(() => new Error(errorMessage)));
    fixture.detectChanges();
    expect(component.error).toBe(errorMessage);
  }); 


});
