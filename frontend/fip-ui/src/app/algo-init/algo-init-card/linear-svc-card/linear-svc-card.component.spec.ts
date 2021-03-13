import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearSvcCardComponent } from './linear-svc-card.component';

describe('LinearSvcCardComponent', () => {
  let component: LinearSvcCardComponent;
  let fixture: ComponentFixture<LinearSvcCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearSvcCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearSvcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
