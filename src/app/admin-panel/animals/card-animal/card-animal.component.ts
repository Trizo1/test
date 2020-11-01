import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DocxService } from 'src/app/shared/services/docx.service';
import { AnimalService } from 'src/app/shared/services/animal.service';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  animal: any;
  date = new Date();
  constructor(private route: ActivatedRoute, private location: Location, private docxService: DocxService, private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animal = this.route.snapshot.data.animal;
    this.animalService.getPetHealth(this.animal.id).subscribe(res => {
      this.animal.Pets_health = res;
    })
    this.animalService.getPetOwner(this.animal.id).subscribe(res => {
      this.animal.Pets_owner = res;
    })
    this.animalService.getPetVaccination(this.animal.id).subscribe(res => {
      this.animal.Pets_vaccination = res;
    })
    this.animalService.getPetSanitation(this.animal.id).subscribe(res => {
      this.animal.Pets_sanitation = res;
    })
    console.log(this.animal);
  }

  goBack() {
    this.location.back();
  }

  // getDocx() {
  //   this.docxService.getDoc(this.animal.id).subscribe(res => {

  //   })
  // }
}