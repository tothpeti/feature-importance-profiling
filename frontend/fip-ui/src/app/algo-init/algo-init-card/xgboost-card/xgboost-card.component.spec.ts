import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XgboostCardComponent } from './xgboost-card.component';

describe('XgboostCardComponent', () => {
  let component: XgboostCardComponent;
  let fixture: ComponentFixture<XgboostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XgboostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XgboostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
