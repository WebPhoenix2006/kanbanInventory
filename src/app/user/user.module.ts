import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';


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
<<<<<<< HEAD
  declarations: [LayoutComponent, DashboardComponent, InventoryComponent, SuppliersComponent, OrdersComponent, ProductDetailsComponent],
=======
  declarations: [
    LayoutComponent,
    DashboardComponent,
    InventoryComponent,
    SuppliersComponent,
    OrdersComponent,
  ],
>>>>>>> 514699596ecb7a77628c81f9540f1fd9e4f4bf56
  imports: [
    CommonModule,
    NgChartsModule,
    UserRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UserModule {}
