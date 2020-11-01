import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petFilters'
})
export class PetFiltersPipe implements PipeTransform {

  transform(animals: any[], filters: any[]): any[] {
    let pipedPets = [];
    let optionArray = [];
    let emptyFilters = 0;
    for (let filter of filters) {
      if (filter.options.length > 0) {
        for (let item of filter.options) {
          if (pipedPets.length > 0) {
            if (filter.options.length == 1) {
              pipedPets = pipedPets.filter(pet => pet[filter.name] == item.option);
            }
            else {
              let filteredPets;
              filteredPets = pipedPets.filter(pet => pet[filter.name] == item.option);
              filteredPets.forEach(pet => {
                optionArray.push(pet);
              });
            }
          }
          else {
            let filteredPets;
            filteredPets = animals.filter(pet => pet[filter.name] == item.option);
            filteredPets.forEach(pet => {
              optionArray.push(pet);
            });
          }
        }
        if (optionArray.length > 0) {
          pipedPets.splice(0, pipedPets.length);
          optionArray.forEach(item => pipedPets.push(item));
          optionArray.splice(0, optionArray.length);
        }
      } else
        emptyFilters++;
    }
    if (emptyFilters == filters.length)
      return animals;
    return pipedPets;
  }

}
