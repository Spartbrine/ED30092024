import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.scss'
})
export class Ejercicio5Component {
  matrix: number[][] = [];
  rowSums: number[] = [];
  rowAverages: number[] = [];
  colSums: number[] = [];
  colAverages: number[] = [];

  generateMatrix() {
    this.matrix = Array(5).fill(0).map(() =>
      Array(10).fill(0).map(() => Math.floor(Math.random() * 100))
    );
    this.calculateSumsAndAverages();
  }

  calculateSumsAndAverages() {
    this.rowSums = this.matrix.map(row => row.reduce((sum, num) => sum + num, 0));
    this.rowAverages = this.rowSums.map(sum => sum / this.matrix[0].length);

    this.colSums = this.matrix[0].map((_, colIndex) =>
      this.matrix.reduce((sum, row) => sum + row[colIndex], 0)
    );
    this.colAverages = this.colSums.map(sum => sum / this.matrix.length);
  }
}
