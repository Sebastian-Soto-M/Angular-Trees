import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtEjemploComponent } from './bt-ejemplo.component';

describe('BtEjemploComponent', () => {
  let component: BtEjemploComponent;
  let fixture: ComponentFixture<BtEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
