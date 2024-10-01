import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.scss'
})
export class Ejercicio1Component {
  matrix: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  result: number[] = [];

  countZeros() {
    this.result = this.matrix.map(row => row.filter(value => value === 0).length);
  }
}
