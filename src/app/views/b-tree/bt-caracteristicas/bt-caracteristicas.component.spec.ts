import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtCaracteristicasComponent } from './bt-caracteristicas.component';

describe('BtCaracteristicasComponent', () => {
  let component: BtCaracteristicasComponent;
  let fixture: ComponentFixture<BtCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtCaracteristicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
