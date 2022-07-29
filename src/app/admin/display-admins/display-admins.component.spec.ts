import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdminsComponent } from './display-admins.component';

describe('DisplayAdminsComponent', () => {
  let component: DisplayAdminsComponent;
  let fixture: ComponentFixture<DisplayAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
