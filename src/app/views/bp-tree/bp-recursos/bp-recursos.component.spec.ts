import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpRecursosComponent } from './bp-recursos.component';

describe('BpRecursosComponent', () => {
  let component: BpRecursosComponent;
  let fixture: ComponentFixture<BpRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
