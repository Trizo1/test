import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { Shelter } from '../shared/models/shelter.model';
import { ShelterService } from '../shared/services/shelter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {

  shelter_id: number;
  animals: any[];
  shelter: Shelter;
  filters = [];
  filtersToDelete = ['id', 'card_num', 'age', 'weight', 'name', 'breed', 'id_tag', 'date_in', 'reason', 'enclosure', 'shelter_id', 'special', 'Pets_additional'];
  activeFilters = [];
  filtersIsLoaded = false;
  curPage: number = 1;
  lastAddedFilter: string;

  @ViewChild('petList') petList: ElementRef;

  constructor(private shelterService: ShelterService, private activatedRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.shelter = this.activatedRoute.snapshot.data['shelter'];
    this.getPetsByShelter(this.shelter.id);
  }

  getPetsByShelter(id: number) {
    this.shelterService.getPetsByShelter(id).subscribe(data => {
      this.animals = data;
      for (let field in data['Pets_mains'][0]) {
        this.getFilters(data['Pets_mains'], field);
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

  checkDisabled(filterName: string, filterOption: string, array: any[], checkbox: MatCheckbox) {
    if (this.lastAddedFilter != filterName) {
      if (array.filter(item => item[filterName] == filterOption).length > 0)
        return false;
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
