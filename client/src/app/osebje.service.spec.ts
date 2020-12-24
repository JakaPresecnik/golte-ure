import { TestBed } from '@angular/core/testing';

import { DomovService } from './domov.service';

describe('DomovService', () => {
  let service: DomovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
