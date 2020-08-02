import { TestBed } from '@angular/core/testing';

import { InMemNewsDbServiceService } from './in-mem-news-db-service.service';

describe('InMemNewsDbServiceService', () => {
  let service: InMemNewsDbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemNewsDbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
