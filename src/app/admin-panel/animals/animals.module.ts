import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';
import { TableAnimalsComponent } from './table-animals/table-animals.component';
import { AnimalManageComponent } from './animal-manage/animal-manage.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardAnimalComponent } from './card-animal/card-animal.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [AnimalsComponent, TableAnimalsComponent, AnimalManageComponent, CardAnimalComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatButtonModule,
    FontAwesomeModule,
    MatRippleModule,
    MatSortModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    DragDropModule,
    MatExpansionModule,
    MatCheckboxModule,
    NgxDocViewerModule
  ]
})
export class AnimalsModule { }
