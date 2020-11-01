import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelterResolverService } from '../shared/services/shelter-resolver.service';
import { ShelterComponent } from './shelter.component';


const routes: Routes = [
  {
    path: '',
    component: ShelterComponent,
    resolve: {
      shelter: ShelterResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelterRoutingModule { }
