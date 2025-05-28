import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { RouterModule } from '@angular/router';
import { CustomScrollComponent } from './components/cus-scroll/cus-scroll.component';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, SvgIconsComponent, CustomScrollComponent, NavButtonsComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    CustomScrollComponent,
    SvgIconsComponent,
    NavButtonsComponent, 
    ModalComponent
  ]
})
export class SharedModule { }
