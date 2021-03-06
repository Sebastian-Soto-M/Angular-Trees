import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtRecursosComponent } from './bt-recursos.component';

describe('BtRecursosComponent', () => {
  let component: BtRecursosComponent;
  let fixture: ComponentFixture<BtRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
