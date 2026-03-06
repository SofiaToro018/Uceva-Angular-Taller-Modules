import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRandomUsers } from './list-random-users';

describe('ListRandomUsers', () => {
  let component: ListRandomUsers;
  let fixture: ComponentFixture<ListRandomUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRandomUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRandomUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
