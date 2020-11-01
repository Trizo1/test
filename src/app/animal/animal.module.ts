import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnimalComponent } from './animal.component';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [AnimalComponent, RequestComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class AnimalModule { }
