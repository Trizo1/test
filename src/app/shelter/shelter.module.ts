import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelterRoutingModule } from './shelter-routing.module';
import { ShelterComponent } from './shelter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { PetFiltersModule } from '../shared/pipes/pet-filters/pet-filters.module';



@NgModule({
  declarations: [ShelterComponent,],
  imports: [
    CommonModule,
    ShelterRoutingModule,
    MatCheckboxModule,
    MatExpansionModule,
    FontAwesomeModule,
    NgxPaginationModule,
    PetFiltersModule
  ]
})
export class ShelterModule { }
