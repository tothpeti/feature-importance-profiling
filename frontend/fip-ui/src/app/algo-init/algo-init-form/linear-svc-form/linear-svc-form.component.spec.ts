import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearSvcFormComponent } from './linear-svc-form.component';

describe('LinearSvcFormComponent', () => {
  let component: LinearSvcFormComponent;
  let fixture: ComponentFixture<LinearSvcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearSvcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearSvcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
