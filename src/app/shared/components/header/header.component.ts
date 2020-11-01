import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthentificationComponent } from 'src/app/authentification/authentification.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAuthDialog() {
    let dialogRef = this.dialog.open(AuthentificationComponent, {
      autoFocus: false,
      width: '400px'
    });
  }

}
