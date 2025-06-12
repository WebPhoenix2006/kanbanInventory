import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: false
})
export class LayoutComponent implements OnInit {
  isSidebarCollapsed = signal<boolean>(false);

  ngOnInit(): void {
    this.setSidebarState(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.setSidebarState(width);
  }

  setSidebarState(width: number): void {
    this.isSidebarCollapsed.set(width < 768);
  }

  toggleCollapse(state: boolean): void {
    this.isSidebarCollapsed.set(state);
  }
}
