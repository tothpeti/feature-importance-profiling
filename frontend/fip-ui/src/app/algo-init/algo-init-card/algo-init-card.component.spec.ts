import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoInitCardComponent } from './algo-init-card.component';

describe('AlgoInitCardComponent', () => {
  let component: AlgoInitCardComponent;
  let fixture: ComponentFixture<AlgoInitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoInitCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoInitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
