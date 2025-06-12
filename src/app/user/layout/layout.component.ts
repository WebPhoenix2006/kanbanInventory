import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss', 
  standalone: false,
})
export class LayoutComponent {
  isSidebarCollapsed = signal<boolean>(false);
  
  toggleCollapse (state: boolean): void {
    this.isSidebarCollapsed.set(state);
  }
  
}
