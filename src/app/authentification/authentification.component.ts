import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  users = [
    {
      name: 'Департамент (ДЖКХ)',
      value: 'Департамент (ДЖКХ)'
    },
    {
      name: 'Префектура ЮЗАО',
      value: 'Префектура ЮЗАО'
    },
    {
      name: 'ГБУ «Доринвест»',
      value: 'ГБУ «Доринвест»'
    },
    {
      name: 'Приют «Щербинка»',
      value: 'Приют «Щербинка»'
    },
    {
      name: 'Приют «Некрасовка»',
      value: 'Приют «Некрасовка»'
    },
  ];

  constructor(private router: Router, public dialogRef: MatDialogRef<AuthentificationComponent>) { }

  ngOnInit(): void {
  }

  signin() {
    this.dialogRef.close();
    this.router.navigate(['admin-panel/animals']);
  }

}
