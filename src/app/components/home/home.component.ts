import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  exercises = [
    { title: 'Ejercicio 1', description: 'Contar ceros en una matriz 4x4', link: '/ejercicio1' },
    { title: 'Ejercicio 2', description: 'Cuadrado Mágico', link: '/ejercicio2' },
    { title: 'Ejercicio 3', description: 'Operaciones con matrices 2x2', link: '/ejercicio3' },
    { title: 'Ejercicio 4', description: 'Llenar matriz con 1\'s en la diagonal', link: '/ejercicio4' },
    { title: 'Ejercicio 5', description: 'Suma y promedio de filas y columnas', link: '/ejercicio5' },
    { title: 'Ejercicio 6', description: 'Resumen de ventas por mes y día', link: '/ejercicio6' },
    { title: 'Ejercicio 7', description: 'Resumen de calificaciones', link: '/ejercicio7' }
  ];
}
