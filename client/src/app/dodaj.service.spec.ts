import { TestBed } from '@angular/core/testing';

import { DodajService } from './dodaj.service';

describe('DodajService', () => {
  let service: DodajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
