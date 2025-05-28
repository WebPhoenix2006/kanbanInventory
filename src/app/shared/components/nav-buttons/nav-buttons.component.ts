import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.scss',
  standalone: false
})

export class NavButtonsComponent {
  page = input.required<string>();
}
