import { TestBed } from '@angular/core/testing';

import { TransactionalApiService } from './transactional-api-service';

describe('TransactionalApiService', () => {
  let service: TransactionalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
