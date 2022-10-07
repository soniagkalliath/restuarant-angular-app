import { TestBed } from '@angular/core/testing';

import { RestuarantApiService } from './restuarant-api.service';

describe('RestuarantApiService', () => {
  let service: RestuarantApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestuarantApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
