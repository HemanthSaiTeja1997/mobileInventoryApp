import { TestBed } from '@angular/core/testing';

import { ApiList } from './api-list';

describe('ApiList', () => {
  let service: ApiList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
