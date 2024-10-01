import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path:'ejercicio1',
    loadComponent: () => import('./components/ejercicio1/ejercicio1.component').then(m => m.Ejercicio1Component)
  },
  {
    path:'ejercicio2',
    loadComponent: () => import('./components/ejercicio2/ejercicio2.component').then(m => m.Ejercicio2Component)
  },
  {
    path:'ejercicio3',
    loadComponent: () => import('./components/ejercicio3/ejercicio3.component').then(m => m.Ejercicio3Component)
  },
  {
    path:'ejercicio4',
    loadComponent: () => import('./components/ejercicio4/ejercicio4.component').then(m => m.Ejercicio4Component)
  },
  {
    path:'ejercicio5',
    loadComponent: () => import('./components/ejercicio5/ejercicio5.component').then(m => m.Ejercicio5Component)
  },
  {
    path:'ejercicio6',
    loadComponent: () => import('./components/ejercicio6/ejercicio6.component').then(m => m.Ejercicio6Component)
  },
  {
    path:'ejercicio7',
    loadComponent: () => import('./components/ejercicio7/ejercicio7.component').then(m => m.Ejercicio7Component)
  },
  { path: '**', redirectTo: '' }  // Redirecciona a la home si no encuentra la ruta
];
