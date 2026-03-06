import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FreeToGameService } from './freetogame.service';
import { FreeToGame } from '../interfaces/freetogame';

describe('FreeToGameService', () => {
  let service: FreeToGameService;
  let httpMock: HttpTestingController;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FreeToGameService],
    });
    service = TestBed.inject(FreeToGameService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve games from the API via GET', () => {
    service.getGames().subscribe((games) => {
      expect(games.length).toBe(2);
      expect(games).toEqual(mockGames);
    });

    const req = httpMock.expectOne((request) => request.url.includes('freetogame'));
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('should return an empty array when API returns no games', () => {
    service.getGames().subscribe((games) => {
      expect(games.length).toBe(0);
      expect(games).toEqual([]);
    });

    const req = httpMock.expectOne((request) => request.url.includes('freetogame'));
    req.flush([]);
  });

  it('should handle API error gracefully', () => {
    service.getGames().subscribe({
      next: () => fail('should have failed with a 500 error'),
      error: (error) => {
        expect(error).toBeTruthy();
      },
    });

    const req = httpMock.expectOne((request) => request.url.includes('freetogame'));
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});
