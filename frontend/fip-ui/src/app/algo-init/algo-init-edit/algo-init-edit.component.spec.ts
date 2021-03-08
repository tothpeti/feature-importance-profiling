import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoInitEditComponent } from './algo-init-edit.component';

describe('AlgoInitEditComponent', () => {
  let component: AlgoInitEditComponent;
  let fixture: ComponentFixture<AlgoInitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoInitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoInitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
