import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMovies } from './table-movies.component';

describe('TableMovies', () => {
  let component: TableMovies;
  let fixture: ComponentFixture<TableMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableMovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
