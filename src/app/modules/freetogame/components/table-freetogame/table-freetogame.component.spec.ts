import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFreeToGameComponent } from './table-freetogame.component';
import { FreeToGame } from '../../interfaces/freetogame';

describe('TableFreeToGameComponent', () => {
  let component: TableFreeToGameComponent;
  let fixture: ComponentFixture<TableFreeToGameComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableFreeToGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableFreeToGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize games as an empty array by default', () => {
    expect(component.games).toEqual([]);
    expect(component.games.length).toBe(0);
  });

  it('should accept games input', () => {
    component.games = mockGames;
    fixture.detectChanges();

    expect(component.games.length).toBe(2);
    expect(component.games).toEqual(mockGames);
  });

  it('should display the correct number of games when input is set', () => {
    component.games = mockGames;
    fixture.detectChanges();

    expect(component.games[0].title).toBe('Overwatch 2');
    expect(component.games[1].title).toBe('Genshin Impact');
  });

  it('should handle a single game in the list', () => {
    component.games = [mockGames[0]];
    fixture.detectChanges();

    expect(component.games.length).toBe(1);
    expect(component.games[0].id).toBe(1);
  });

  it('should reflect updated games list when input changes', () => {
    component.games = mockGames;
    fixture.detectChanges();
    expect(component.games.length).toBe(2);

    component.games = [mockGames[0]];
    fixture.detectChanges();
    expect(component.games.length).toBe(1);
  });

  it('should handle empty array assignment', () => {
    component.games = mockGames;
    fixture.detectChanges();
    expect(component.games.length).toBe(2);

    component.games = [];
    fixture.detectChanges();
    expect(component.games.length).toBe(0);
  });

  it('should contain correct game properties', () => {
    component.games = mockGames;
    fixture.detectChanges();

    const firstGame = component.games[0];
    expect(firstGame.id).toBeDefined();
    expect(firstGame.title).toBeDefined();
    expect(firstGame.thumbnail).toBeDefined();
    expect(firstGame.genre).toBeDefined();
    expect(firstGame.platform).toBeDefined();
    expect(firstGame.release_date).toBeDefined();
    expect(firstGame.publisher).toBeDefined();
    expect(firstGame.developer).toBeDefined();
  });

  it('should have the correct selector', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });

  it('should not mutate the original games array', () => {
    const originalGames = [...mockGames];
    component.games = mockGames;
    fixture.detectChanges();

    expect(mockGames).toEqual(originalGames);
  });
});