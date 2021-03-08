import { TestBed } from '@angular/core/testing';

import { AlgoInitService } from './algo-init.service';

describe('AlgoInitService', () => {
  let service: AlgoInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
