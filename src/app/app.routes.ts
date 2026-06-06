import { Routes } from '@angular/router';
import { Home } from './home/home';
import { GerenciaProyectos } from './gerencia-proyectos/gerencia-proyectos';
import { CalidadSoftware } from './calidad-software/calidad-software';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gerencia', component: GerenciaProyectos },
  { path: 'calidad', component: CalidadSoftware },
  { path: '**', redirectTo: '' }
];
