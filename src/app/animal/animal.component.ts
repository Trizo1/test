import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Shelter } from '../shared/models/shelter.model';
import { Location } from '@angular/common';
import { RequestComponent } from './request/request.component';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  previous: any;
  animal: any;
  shelter: Shelter;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.animal = this.route.snapshot.data.animal;
    this.shelter = this.route.snapshot.data.shelter;
  }

  goBack() {
    this.location.back();
  }

  openRequestDialog() {
    let dialogRef = this.dialog.open(RequestComponent, {
      autoFocus: false
    });
  }

}
