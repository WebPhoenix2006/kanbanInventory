import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  standalone: false
})
export class ProductDetailsComponent {
  activeTab: string = 'overview';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
