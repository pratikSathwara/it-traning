import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectMessageComponent } from './contect-message.component';

describe('ContectMessageComponent', () => {
  let component: ContectMessageComponent;
  let fixture: ComponentFixture<ContectMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
