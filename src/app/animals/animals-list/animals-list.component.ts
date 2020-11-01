import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  animals: any[];

  filters = [];
  filtersToDelete = ['id', 'card_num', 'age', 'weight', 'name', 'breed', 'id_tag', 'date_in', 'reason', 'shelter_id', 'special', 'enclosure',
    'Pets_additional', 'Pets_move'];
  activeFilters = [];
  lastAddedFilter: string;
  filtersIsLoaded = false;

  curPage: number = 1;

  @ViewChild('petList') petList: ElementRef;

  constructor(private animalService: AnimalService, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getReadyPets();
  }

  getReadyPets() {
    this.animalService.getReadyPets().subscribe(data => {
      this.animals = data;
      console.log(this.animals);
      for (let field in data[0]) {
        this.getFilters(data, field);
      }
      this.filtersIsLoaded = true;
    })
  }

  pageChanged(event) {
    this.curPage = event;
    this.petList.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  getFilters(array: any[], field: string) {
    if (!this.filtersToDelete.find(item => item == field)) {
      this.filters.push({
        name: field,
        options: [...new Set(array.map(item => item[`${field}`]))].sort()
      });
      this.activeFilters.push({
        name: field,
        options: []
      });
    }
    console.log(this.filters);
  }

  changeFilter(event: any, filterName: string, filterOption: string) {
    if (event.checked == true)
      this.addFilter(filterName, filterOption);
    else
      this.removeFilter(filterName, filterOption);
  }

  addFilter(filterName: string, filterOption: string) {
    let curFilter = this.activeFilters.find(filter => filter.name == filterName);
    curFilter.options.push({
      option: filterOption
    });
    this.activeFilters = this.activeFilters.slice();
    this.lastAddedFilter = filterName;
  }

  removeFilter(filterName: string, filterOption: string) {
    let curFilter = this.activeFilters.find(filter => filter.name == filterName);
    let optionIndex = curFilter.options.findIndex(item => item.option == filterOption);
    curFilter.options.splice(optionIndex, 1);
    this.activeFilters = this.activeFilters.slice();
  }

  checkDisabled(filterName: string, filterOption: string, array: any, checkbox: MatCheckbox) {
    if (this.lastAddedFilter != filterName) {
      if (array.filter(item => item[filterName] == filterOption).length > 0) {
        return false;
      }
      else
        return true;
    } else {
      if (checkbox.disabled)
        return true;
      else
        return false;
    }
  }

  goBack() {
    this.location.back();
  }

}
