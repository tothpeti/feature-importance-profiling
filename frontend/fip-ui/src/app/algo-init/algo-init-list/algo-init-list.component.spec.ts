import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoInitListComponent } from './algo-init-list.component';

describe('AlgoInitListComponent', () => {
  let component: AlgoInitListComponent;
  let fixture: ComponentFixture<AlgoInitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoInitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoInitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
