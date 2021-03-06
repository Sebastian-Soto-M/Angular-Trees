import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvlEjemploComponent } from './avl-ejemplo.component';

describe('AvlEjemploComponent', () => {
  let component: AvlEjemploComponent;
  let fixture: ComponentFixture<AvlEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvlEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvlEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
