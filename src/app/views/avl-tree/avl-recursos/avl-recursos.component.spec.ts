import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvlRecursosComponent } from './avl-recursos.component';

describe('AvlRecursosComponent', () => {
  let component: AvlRecursosComponent;
  let fixture: ComponentFixture<AvlRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvlRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvlRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
