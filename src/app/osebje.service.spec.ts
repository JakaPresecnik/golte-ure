import { TestBed } from '@angular/core/testing';

import { OsebjeService } from './osebje.service';

describe('OsebjeService', () => {
  let service: OsebjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsebjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
