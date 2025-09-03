import { TestBed } from '@angular/core/testing';

import { Podata } from './podata';

describe('Podata', () => {
  let service: Podata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Podata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
