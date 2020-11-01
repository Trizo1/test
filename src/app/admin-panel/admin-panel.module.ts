import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatSidenavModule
  ]
})
export class AdminPanelModule { }
