import { Component, input, output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewControllerService } from '../../services/view-controller.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false,
})
export class SidebarComponent {

  isSidebarCollapsed = input.required<boolean>();
  collapseSidebar = output<boolean>();

  closeSidebar():void {
    this.collapseSidebar.emit(true);
  } 

  openSidebar(): void {
    this.collapseSidebar.emit(false);
  }


 scrlListner = new BehaviorSubject(0);
  constructor(private viewCS: ViewControllerService, private auth: AuthService, private router: Router) {}

  onScroll(top) {
    this.viewCS.setScrlTop(top);
  }

  ngOnInit(): void {
    this.scrlListner.next(this.viewCS.scrlTop);
  }
  onLogout() {
  this.auth.logout();
  this.router.navigate(['/auth/login']);
}
}
