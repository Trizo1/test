import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Destroyer } from 'src/app/shared/destroyer';
import { Shelter } from 'src/app/shared/models/shelter.model';
import { ShelterService } from 'src/app/shared/services/shelter.service';
import * as DG from '2gis-maps';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html',
  styleUrls: ['./shelters.component.scss']
})
export class SheltersComponent extends Destroyer implements OnInit, OnDestroy {

  shelterIsActive: boolean = false;
  shelters: Shelter[];
  activatedId: number;
  map: any;
  markers: any = [];

  constructor(private shelterService: ShelterService) {
    super();
  }

  ngOnInit(): void {
    this.getShelters();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getShelters() {
    this.shelterService.getShelters().pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.shelters = data;
      console.log(data);
      this.initMap();
    })
  }

  initMap() {
    this.map = DG.map('map', {
      'center': [55.754064, 37.620461],
      'zoom': 10,
      'fullscreenControl': false,
      'zoomControl': false,
    });
    this.map.setLang('ru');
    this.initShelterMarkers();
  }

  initShelterMarkers() {
    for (let shelter of this.shelters) {
      let marker = DG.marker([shelter.lat, shelter.long]).addTo(this.map).bindLabel(`${shelter.name}`);
      marker.shelter_id = shelter.id;
      marker.on('click', (e) => {
        this.scrollToShelter(e.target.shelter_id);
        this.activatedId = e.target.shelter_id;
      })
      this.markers.push(marker);
    }
    DG.featureGroup(this.markers).addTo(this.map).on('click', (e) => {
      this.map.setView([e.latlng.lat, e.latlng.lng], 14);
    });
  }

  matToShelter(lat: number, long: number, id: number) {
    this.map.setView([lat, long], 14);
  }

  scrollToShelter(id: number) {
    let el = document.getElementById(`shelter_${id}`);
    el.scrollIntoView({ behavior: "smooth" });
  }

  changeActiveShelter(id: number) {
    if (this.activatedId !== id) {
      this.activatedId = id;
    }
  }

}
