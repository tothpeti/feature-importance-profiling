import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualInfoCardComponent } from './mutual-info-card.component';

describe('MutualInfoCardComponent', () => {
  let component: MutualInfoCardComponent;
  let fixture: ComponentFixture<MutualInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
