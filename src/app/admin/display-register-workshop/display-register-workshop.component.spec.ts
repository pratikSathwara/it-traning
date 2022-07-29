import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRegisterWorkshopComponent } from './display-register-workshop.component';

describe('DisplayRegisterWorkshopComponent', () => {
  let component: DisplayRegisterWorkshopComponent;
  let fixture: ComponentFixture<DisplayRegisterWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRegisterWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRegisterWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
