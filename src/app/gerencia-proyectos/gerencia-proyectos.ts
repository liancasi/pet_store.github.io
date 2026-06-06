import { Component } from '@angular/core';

@Component({
  selector: 'app-gerencia-proyectos',
  imports: [],
  templateUrl: './gerencia-proyectos.html',
  styleUrl: './gerencia-proyectos.css',
})
export class GerenciaProyectos {
  phases = [
    { name: 'Elicitación',                              dur: 'Mes 1 · 1 mes' },
    { name: 'Análisis de Requerimientos y Arquitectura UML', dur: 'Mes 2 · 1 mes' },
    { name: 'Métricas de Desarrollo / Diseño / Arquitectura', dur: 'Mes 3–4 · 2 meses' },
    { name: 'Prototipo',                                dur: 'Mes 3 · 1 mes' },
    { name: 'Desarrollo Backend / BD / Frontend',       dur: 'Mes 5–10 · 6 meses' },
    { name: 'Pruebas y Corrección de Errores',          dur: 'Mes 5 · 1 mes' },
    { name: 'Lanzamiento Versión Alfa',                 dur: 'Mes 11 · 1 mes' },
    { name: 'Soporte',                                  dur: 'Mes 12–13 · 2 meses' },
    { name: 'Lanzamiento Versión Beta',                 dur: 'Mes 14 · 1 mes' },
    { name: 'Marketing, Publicidad y Cierre',           dur: 'Mes 15–16 · 2 meses' },
  ];
}
