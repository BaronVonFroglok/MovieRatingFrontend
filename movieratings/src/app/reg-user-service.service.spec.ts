import { TestBed } from '@angular/core/testing';

import { RegUserServiceService } from './reg-user-service.service';

describe('RegUserServiceService', () => {
  let service: RegUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
