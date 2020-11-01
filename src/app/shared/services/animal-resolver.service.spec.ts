import { TestBed } from '@angular/core/testing';

import { AnimalResolverService } from './animal-resolver.service';

describe('OneAnimalResolverService', () => {
  let service: AnimalResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
