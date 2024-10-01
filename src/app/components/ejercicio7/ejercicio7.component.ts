import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.scss'
})
export class Ejercicio7Component {
  parciales = ['Parcial 1', 'Parcial 2', 'Parcial 3'];
  grades: number[][] = [];
  averages: number[] = [];
  maxAverage = 0;
  minAverage = 0;
  failedExams = 0;
  distribution: number[] = Array(5).fill(0);

  initializeGrades() {
    this.grades = Array(10).fill(0).map(() =>
      Array(3).fill(0).map(() => +(Math.random() * 5 + 5).toFixed(1))
    );
    this.calculateResults();
  }

  calculateResults() {
    this.averages = this.grades.map(grades => grades.reduce((sum, grade) => sum + grade, 0) / 3);
    this.maxAverage = Math.max(...this.averages);
    this.minAverage = Math.min(...this.averages);
    this.failedExams = this.grades.reduce((total, grades) =>
      total + grades.filter(grade => grade < 7).length, 0
    );

    this.distribution = Array(5).fill(0);
    this.averages.forEach(avg => {
      if (avg >= 5.0 && avg < 6.0) this.distribution[0]++;
      else if (avg >= 6.0 && avg < 7.0) this.distribution[1]++;
      else if (avg >= 7.0 && avg < 8.0) this.distribution[2]++;
      else if (avg >= 8.0 && avg < 9.0) this.distribution[3]++;
      else if (avg >= 9.0 && avg <= 10) this.distribution[4]++;
    });
  }
}
