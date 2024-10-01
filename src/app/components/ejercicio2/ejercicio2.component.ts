import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.scss'
})
export class Ejercicio2Component {
  size: number = 3;  // Tamaño inicial de la matriz
  matrix: number[][] = []; // Matriz inicializada vacía
  isMagicSquare: boolean | null = null; // Variable para indicar si es un cuadrado mágico

  constructor() {
    this.initializeMatrix();  // Inicializar la matriz al cargar el componente
  }

  // Método para inicializar la matriz con el tamaño proporcionado
  initializeMatrix() {
    if (this.size > 0) {
      this.matrix = Array.from({ length: this.size }, () =>
        Array.from({ length: this.size }, () => 0)
      );
    } else {
      this.matrix = [];
    }
  }

  // Método para actualizar la matriz cuando se cambia el tamaño
  updateMatrix() {
    if (this.size && this.size > 0) {
      this.initializeMatrix();
    }
  }

  // Método para verificar si la matriz es un cuadrado mágico
  checkMagicSquare() {
    const targetSum = this.matrix[0].reduce((a, b) => a + b, 0); // Suma de la primera fila como referencia

    // Verificar filas
    for (let row of this.matrix) {
      const rowSum = row.reduce((a, b) => a + b, 0);
      if (rowSum !== targetSum) {
        this.isMagicSquare = false;
        return;
      }
    }

    // Verificar columnas
    for (let i = 0; i < this.size; i++) {
      let colSum = 0;
      for (let j = 0; j < this.size; j++) {
        colSum += this.matrix[j][i];
      }
      if (colSum !== targetSum) {
        this.isMagicSquare = false;
        return;
      }
    }

    // Verificar diagonal principal
    let diagSum1 = 0;
    for (let i = 0; i < this.size; i++) {
      diagSum1 += this.matrix[i][i];
    }
    if (diagSum1 !== targetSum) {
      this.isMagicSquare = false;
      return;
    }

    // Verificar diagonal secundaria
    let diagSum2 = 0;
    for (let i = 0; i < this.size; i++) {
      diagSum2 += this.matrix[i][this.size - i - 1];
    }
    if (diagSum2 !== targetSum) {
      this.isMagicSquare = false;
      return;
    }

    // Si todas las sumas coinciden, es un cuadrado mágico
    this.isMagicSquare = true;
  }
}
