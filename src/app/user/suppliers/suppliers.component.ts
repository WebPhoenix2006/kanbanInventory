import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss',
  standalone: false
})
export class SuppliersComponent {

  page = signal<string>('page 2 of 10');

customers = [
  
  {
    name: 'Victor Adebayo',
    product: 'PRD-4952',
    contactNumber: '08071234567',
    email: 'victor.adebayo92@example.com',
    type: 'taking return',
    onTheWay: 14,
  },
  {
    name: 'Chika Obi',
    product: 'PRD-3291',
    contactNumber: '08123456789',
    email: 'chika.obi88@example.com',
    type: 'not taking return',
    onTheWay: '-',
  },
  {
    name: 'Tunde Balogun',
    product: 'PRD-7634',
    contactNumber: '09087654321',
    email: 'tunde.balogun73@example.com',
    type: 'taking return',
    onTheWay: 18,
  },
  {
    name: 'Amaka Okoye',
    product: 'PRD-6527',
    contactNumber: '07019876543',
    email: 'amaka.okoye77@example.com',
    type: 'not taking return',
    onTheWay: 11,
  },
  {
    name: 'Bola Hassan',
    product: 'PRD-4138',
    contactNumber: '08129876345',
    email: 'bola.hassan45@example.com',
    type: 'taking return',
    onTheWay: '-',
  },
  {
    name: 'Grace Uche',
    product: 'PRD-7865',
    contactNumber: '08033221144',
    email: 'grace.uche12@example.com',
    type: 'not taking return',
    onTheWay: 19,
  },
  {
    name: 'Emeka John',
    product: 'PRD-2135',
    contactNumber: '09044556677',
    email: 'emeka.john25@example.com',
    type: 'taking return',
    onTheWay: 17,
  },
  {
    name: 'Femi Ogundipe',
    product: 'PRD-8843',
    contactNumber: '07087654321',
    email: 'femi.ogundipe50@example.com',
    type: 'not taking return',
    onTheWay: '-',
  },
  {
    name: 'Zainab Bello',
    product: 'PRD-3327',
    contactNumber: '08100998877',
    email: 'zainab.bello30@example.com',
    type: 'taking return',
    onTheWay: 12,
  },
  {
    name: 'Ifeanyi Nwosu',
    product: 'PRD-7150',
    contactNumber: '08044557766',
    email: 'ifeanyi.nwosu61@example.com',
    type: 'not taking return',
    onTheWay: '-',
  },
  {
    name: 'Seyi Alabi',
    product: 'PRD-6742',
    contactNumber: '09066554432',
    email: 'seyi.alabi40@example.com',
    type: 'taking return',
    onTheWay: 15,
  },
  {
    name: 'Rita Eze',
    product: 'PRD-2984',
    contactNumber: '07013425678',
    email: 'rita.eze99@example.com',
    type: 'not taking return',
    onTheWay: 13,
  },
  {
    name: 'Kunle Salami',
    product: 'PRD-9821',
    contactNumber: '08132321234',
    email: 'kunle.salami65@example.com',
    type: 'taking return',
    onTheWay: '-',
  },
  {
    name: 'Ngozi Nnaji',
    product: 'PRD-5716',
    contactNumber: '08076655443',
    email: 'ngozi.nnaji51@example.com',
    type: 'not taking return',
    onTheWay: 16,
  },
  {
    name: 'Ibrahim Musa',
    product: 'PRD-8446',
    contactNumber: '09011223344',
    email: 'ibrahim.musa88@example.com',
    type: 'taking return',
    onTheWay: 20,
  }
];

}
