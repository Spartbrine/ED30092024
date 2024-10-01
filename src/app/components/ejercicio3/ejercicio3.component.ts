import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.scss'
})
export class Ejercicio3Component {
  matrix1 = [[0, 0], [0, 0]];
  matrix2 = [[0, 0], [0, 0]];
  results: string[] = [];

  calculate() {
    const sum = [
      [this.matrix1[0][0] + this.matrix2[0][0], this.matrix1[0][1] + this.matrix2[0][1]],
      [this.matrix1[1][0] + this.matrix2[1][0], this.matrix1[1][1] + this.matrix2[1][1]],
    ];

    const subtraction = [
      [this.matrix1[0][0] - this.matrix2[0][0], this.matrix1[0][1] - this.matrix2[0][1]],
      [this.matrix1[1][0] - this.matrix2[1][0], this.matrix1[1][1] - this.matrix2[1][1]],
    ];

    const product = [
      [this.matrix1[0][0] * this.matrix2[0][0], this.matrix1[0][1] * this.matrix2[0][1]],
      [this.matrix1[1][0] * this.matrix2[1][0], this.matrix1[1][1] * this.matrix2[1][1]],
    ];

    const division = [
      [this.safeDivide(this.matrix1[0][0], this.matrix2[0][0]), this.safeDivide(this.matrix1[0][1], this.matrix2[0][1])],
      [this.safeDivide(this.matrix1[1][0], this.matrix2[1][0]), this.safeDivide(this.matrix1[1][1], this.matrix2[1][1])],
    ];

    this.results = [
      `Suma: ${JSON.stringify(sum)}`,
      `Resta: ${JSON.stringify(subtraction)}`,
      `Producto: ${JSON.stringify(product)}`,
      `División: ${JSON.stringify(division)}`,
    ];
  }

  safeDivide(a: number, b: number) {
    return b !== 0 ? a / b : 'N/A';
  }
}
