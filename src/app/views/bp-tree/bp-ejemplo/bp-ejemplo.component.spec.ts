import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpEjemploComponent } from './bp-ejemplo.component';

describe('BpEjemploComponent', () => {
  let component: BpEjemploComponent;
  let fixture: ComponentFixture<BpEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
