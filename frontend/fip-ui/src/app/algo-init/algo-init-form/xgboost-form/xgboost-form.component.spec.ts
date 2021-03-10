import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XgboostFormComponent } from './xgboost-form.component';

describe('XgboostFormComponent', () => {
  let component: XgboostFormComponent;
  let fixture: ComponentFixture<XgboostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XgboostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XgboostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
