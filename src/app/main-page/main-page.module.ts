import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { PetBannerComponent } from './pet-banner/pet-banner.component';
import { InfoComponent } from './info/info.component';
import { PetTestComponent } from './pet-banner/pet-test/pet-test.component';
import { SheltersComponent } from './shelters/shelters.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [MainPageComponent, PetBannerComponent, InfoComponent, PetTestComponent, SheltersComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class MainPageModule { }
