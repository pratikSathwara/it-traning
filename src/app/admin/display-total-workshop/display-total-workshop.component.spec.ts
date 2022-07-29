import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTotalWorkshopComponent } from './display-total-workshop.component';

describe('DisplayTotalWorkshopComponent', () => {
  let component: DisplayTotalWorkshopComponent;
  let fixture: ComponentFixture<DisplayTotalWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTotalWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTotalWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
