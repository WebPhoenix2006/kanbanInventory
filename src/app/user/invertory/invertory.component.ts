import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-invertory',
  templateUrl: './invertory.component.html',
  styleUrl: './invertory.component.scss',
  standalone: false,
})

export class InvertoryComponent {

  page = signal<string>('Page 1 of 10');

products = [
  { name: 'Coca Cola', price: 450, quantity: '30 packets', category: '12 Packets',  date: '2025-08-10', availability: 'in stock' },
  { name: 'Red Bull', price: 500, quantity: '12 packets', category: '8 Packets', date: '2025-07-05', availability: 'out of stock' },
  { name: 'Pepsi', price: 420, quantity: '18 packets', category: '6 Packets',  date: '2025-08-22', availability: 'in stock' },
  { name: 'Fanta', price: 350, quantity: '25 packets', category: '15 Packets', date: '2025-06-15', availability: 'low stock' },
  { name: 'Sprite', price: 300, quantity: '20 packets', category: '20 Packets', date: '2025-09-01', availability: 'in stock' },
  { name: '7Up', price: 330, quantity: '22 packets', category: '9 Packets',  date: '2025-07-30', availability: 'low stock' },   
  { name: 'Mirinda', price: 290, quantity: '19 packets', category: '29 Packets',  date: '2025-08-18', availability: 'low stock' },
  { name: 'Mountain Dew', price: 370, quantity: '15 packets', category: '21 Packets',  date: '2025-09-05', availability: 'in stock' },
  { name: 'Lipton Ice Tea', price: 480, quantity: '10 packets', category: '4 Packets', date: '2025-07-21', availability: 'out of stock' },
  { name: 'Bru', price: 275, quantity: '17 packets', category: '15 Packets', date: '2025-10-12', availability: 'in stock' },
];





}
