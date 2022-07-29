import { TestBed } from '@angular/core/testing';

import { UpcomingEvtSerService } from './upcoming-evt-ser.service';

describe('UpcomingEvtSerService', () => {
  let service: UpcomingEvtSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingEvtSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
