import { TestBed } from '@angular/core/testing';

import { ShelterResolverService } from './shelter-resolver.service';

describe('ShelterResolverService', () => {
  let service: ShelterResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShelterResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
