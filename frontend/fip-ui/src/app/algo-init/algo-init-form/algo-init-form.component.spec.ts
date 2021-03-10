import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoInitFormComponent } from './algo-init-form.component';

describe('AlgoInitFormComponent', () => {
  let component: AlgoInitFormComponent;
  let fixture: ComponentFixture<AlgoInitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoInitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoInitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
