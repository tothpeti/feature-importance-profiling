import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoInitComponent } from './algo-init.component';

describe('AlgoInitComponent', () => {
  let component: AlgoInitComponent;
  let fixture: ComponentFixture<AlgoInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
