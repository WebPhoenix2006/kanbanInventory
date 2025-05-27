import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrl: './svg-icons.component.scss',
  standalone: false,
})
export class SvgIconsComponent implements OnInit {
  @Input() name;

  ngOnInit(): void {}
}
