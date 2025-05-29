import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: false
})
export class OrdersComponent {
   generateOrderId() 
   {
  return Math.floor(1000 + Math.random() * 9000); // 4-digit random number
}


 statuses = ['Delayed', 'Confirmed', 'Returned', 'Out for delivery'];

 products = [
  {
    name: 'Coca Cola',
    orderValue: 450,
    quantity: '30 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-08-10',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Red Bull',
    orderValue: 500,
    quantity: '12 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-07-05',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Pepsi',
    orderValue: 420,
    quantity: '18 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-08-22',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Fanta',
    orderValue: 350,
    quantity: '25 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-06-15',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Sprite',
    orderValue: 300,
    quantity: '20 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-09-01',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: '7Up',
    orderValue: 330,
    quantity: '22 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-07-30',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Mirinda',
    orderValue: 290,
    quantity: '19 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-08-18',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Mountain Dew',
    orderValue: 370,
    quantity: '15 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-09-05',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Lipton Ice Tea',
    orderValue: 480,
    quantity: '10 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-07-21',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
  {
    name: 'Bru',
    orderValue: 275,
    quantity: '17 packets',
    orderId: this.generateOrderId(),
    expectedDelivery: '2025-10-12',
    status: this.statuses[Math.floor(Math.random() * this.statuses.length)],
  },
];

}
