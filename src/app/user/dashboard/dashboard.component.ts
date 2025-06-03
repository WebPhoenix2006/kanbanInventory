import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardComponent {
  // Chart type
  public barChartType: ChartType = 'bar';

  // chart options
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      title: { display: true, text: 'Sales & Purchases' },
    },
  };

  // Chart data
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Purchases',
        data: [65000, 59000, 80000, 81000, 56000, 72000],
        backgroundColor: '#817AF3',
      },
      {
        label: 'Sales',
        data: [28000, 48000, 40000, 19000, 86000, 32000],
        backgroundColor: '#46A46C',
      },
    ],
  };

  // Line chart area
  public lineChartType: ChartType = 'line';

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      title: { display: true, text: 'Order Summary' },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Line chart data
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Orders',
        data: [1200, 1500, 1800, 1700, 1900, 2100],
        fill: false,
        borderColor: '#B6D3FA',
        backgroundColor: '#B6D3FA',
        tension: 0.3,
        pointBackgroundColor: '#B6D3FA',
      },
      {
        label: 'Delivered',
        data: [1100, 1700, 900, 1000, 300, 2100],
        fill: false,
        borderColor: '#DBA362',
        backgroundColor: '#DBA362',

        tension: 0.3,
        pointBackgroundColor: '#DBA362',
      },
    ],
  };
}
