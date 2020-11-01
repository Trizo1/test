import { TestBed } from '@angular/core/testing';

import { AnimalsResolverService } from './animals-resolver.service';

describe('AnimalResolverService', () => {
  let service: AnimalsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
