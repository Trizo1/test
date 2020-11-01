import { PetFiltersPipe } from './pet-filters.pipe';

describe('PetFiltersPipe', () => {
  it('create an instance', () => {
    const pipe = new PetFiltersPipe();
    expect(pipe).toBeTruthy();
  });
});
