import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBooks } from './table-books';

describe('TableBooks', () => {
  let component: TableBooks;
  let fixture: ComponentFixture<TableBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
