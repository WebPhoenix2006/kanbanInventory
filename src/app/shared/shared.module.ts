import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { RouterModule } from '@angular/router';
import { CustomScrollComponent } from './components/cus-scroll/cus-scroll.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, SvgIconsComponent, CustomScrollComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    CustomScrollComponent,
    SvgIconsComponent,
  ]
})
export class SharedModule { }
