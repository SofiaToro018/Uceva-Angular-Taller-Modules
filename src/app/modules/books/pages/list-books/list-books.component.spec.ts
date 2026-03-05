import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooks } from './list-books.component';

describe('ListBooks', () => {
  let component: ListBooks;
  let fixture: ComponentFixture<ListBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
