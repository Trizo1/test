import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetFiltersPipe } from '../pet-filters.pipe';



@NgModule({
  declarations: [
    PetFiltersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PetFiltersPipe
  ]
})
export class PetFiltersModule { }
