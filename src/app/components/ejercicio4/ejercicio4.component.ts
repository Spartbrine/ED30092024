import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.scss'
})
export class Ejercicio4Component {
  size: number = 3;
  matrix: number[][] = [];

  generateMatrix() {
    this.matrix = Array(this.size).fill(0).map((_, i) =>
      Array(this.size).fill(0).map((_, j) => (i === j ? 1 : 0))
    );
  }
}
