import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule),
  },
  {
    path: 'shelter/:shelterId',
    loadChildren: () => import('./shelter/shelter.module').then(m => m.ShelterModule)
  },
  {
    path: 'shelter/:shelterId/:animalId',
    loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
