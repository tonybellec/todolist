import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistTableComponent } from './todolist-table.component';

describe('TodolistComponent', () => {
  let component: TodolistTableComponent;
  let fixture: ComponentFixture<TodolistTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
