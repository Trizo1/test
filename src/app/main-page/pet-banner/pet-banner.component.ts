import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetTestComponent } from './pet-test/pet-test.component';

@Component({
  selector: 'app-pet-banner',
  templateUrl: './pet-banner.component.html',
  styleUrls: ['./pet-banner.component.scss']
})
export class PetBannerComponent implements OnInit {

  @ViewChild('shelters') sheltersSection: ElementRef;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  }

  openTestDialog() {
    let dialogRef = this.dialog.open(PetTestComponent, {
      autoFocus: false
    });
  }
}
