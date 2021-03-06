import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpTreeComponent } from './bp-tree.component';

describe('BpTreeComponent', () => {
  let component: BpTreeComponent;
  let fixture: ComponentFixture<BpTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
