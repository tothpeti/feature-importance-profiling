import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFormComponent } from './tree-form.component';

describe('TreeFormComponent', () => {
  let component: TreeFormComponent;
  let fixture: ComponentFixture<TreeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
