import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { InventoryComponent } from './invertory/invertory.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, InventoryComponent, SuppliersComponent, OrdersComponent],
  imports: [
    CommonModule,
    UserRoutingModule, 
    RouterModule, 
    SharedModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UserModule { }
