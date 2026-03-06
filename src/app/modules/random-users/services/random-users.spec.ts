import { TestBed } from '@angular/core/testing';

import { RandomUsers } from './random-users';

describe('RandomUsers', () => {
  let service: RandomUsers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUsers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
