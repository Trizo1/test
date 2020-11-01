import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalResolverService } from '../shared/services/animal-resolver.service';
import { ShelterResolverService } from '../shared/services/shelter-resolver.service';
import { AnimalComponent } from './animal.component';


const routes: Routes = [
  {
    path: '',
    component: AnimalComponent,
    resolve: {
      animal: AnimalResolverService,
      shelter: ShelterResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
