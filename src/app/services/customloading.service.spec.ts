import { TestBed } from '@angular/core/testing';

import { CustomloadingService } from './customloading.service';

describe('CustomloadingService', () => {
  let service: CustomloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
