import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { InvertoryComponent } from './invertory/invertory.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent, InvertoryComponent, SuppliersComponent ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    RouterModule, 
    SharedModule,
  ]
})
export class UserModule { }
