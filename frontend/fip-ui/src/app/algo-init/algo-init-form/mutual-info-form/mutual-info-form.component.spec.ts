import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualInfoFormComponent } from './mutual-info-form.component';

describe('MutualInfoFormComponent', () => {
  let component: MutualInfoFormComponent;
  let fixture: ComponentFixture<MutualInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutualInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
