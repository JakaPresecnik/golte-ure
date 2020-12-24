import { TestBed } from '@angular/core/testing';

import { OsebaService } from './oseba.service';

describe('OsebaService', () => {
  let service: OsebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
