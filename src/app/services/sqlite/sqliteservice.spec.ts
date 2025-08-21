import { TestBed } from '@angular/core/testing';

import { Sqliteservice } from './sqliteservice';

describe('Sqliteservice', () => {
  let service: Sqliteservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sqliteservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
