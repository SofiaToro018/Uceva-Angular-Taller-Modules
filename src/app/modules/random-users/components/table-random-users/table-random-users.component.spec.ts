import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRandomUsers } from './table-random-users.component';

describe('TableRandomUsers', () => {
  let component: TableRandomUsers;
  let fixture: ComponentFixture<TableRandomUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRandomUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRandomUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
