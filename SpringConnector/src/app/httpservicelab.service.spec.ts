import { TestBed } from '@angular/core/testing';

import { HttpservicelabService } from './httpservicelab.service';

describe('HttpservicelabService', () => {
  let service: HttpservicelabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpservicelabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
