import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.scss'
})
export class Ejercicio6Component {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  sales: number[][] = [];
  totalSales = 0;
  minSale = 0;
  minSaleDay = '';
  minSaleMonth = '';
  maxSale = 0;
  maxSaleDay = '';
  maxSaleMonth = '';
  daySales: number[] = [];

  initializeSales() {
    this.sales = Array(12).fill(0).map(() =>
      Array(5).fill(0).map(() => Math.floor(Math.random() * 1000))
    );
    this.calculateSales();
  }

  calculateSales() {
    let minSale = Number.MAX_SAFE_INTEGER;
    let maxSale = Number.MIN_SAFE_INTEGER;
    this.totalSales = 0;
    this.daySales = Array(5).fill(0);

    this.sales.forEach((monthSales, monthIndex) => {
      monthSales.forEach((sale, dayIndex) => {
        this.totalSales += sale;
        this.daySales[dayIndex] += sale;

        if (sale < minSale) {
          minSale = sale;
          this.minSaleDay = this.days[dayIndex];
          this.minSaleMonth = this.months[monthIndex];
        }

        if (sale > maxSale) {
          maxSale = sale;
          this.maxSaleDay = this.days[dayIndex];
          this.maxSaleMonth = this.months[monthIndex];
        }
      });
    });

    this.minSale = minSale;
    this.maxSale = maxSale;
  }
}
