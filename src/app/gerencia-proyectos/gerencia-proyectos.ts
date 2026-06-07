import { Component } from '@angular/core';

@Component({
  selector: 'app-gerencia-proyectos',
  imports: [],
  templateUrl: './gerencia-proyectos.html',
  styleUrl: './gerencia-proyectos.css',
})
export class GerenciaProyectos {
  activeTab = 'proyecto';

  tabs = [
    { id: 'proyecto',    label: 'Proyecto'                  },
    { id: 'alcance',     label: 'Alcance / Tiempo / Costo'  },
    { id: 'cronograma',  label: 'Cronograma'                },
    { id: 'estructura',  label: 'Estructura'                },
    { id: 'riesgos',     label: 'Riesgos'                   },
    { id: 'ejecucion',   label: 'Ejecución'                 },
    { id: 'imagenes',    label: 'Imágenes'                  },
  ];

  phases = [
    { name: 'Elicitación de Requisitos',                      dur: 'Mes 1',     meses: 1 },
    { name: 'Análisis de Requerimientos y Arquitectura UML',  dur: 'Mes 2',     meses: 1 },
    { name: 'Métricas de Desarrollo, Diseño y Arquitectura',  dur: 'Mes 3-4',   meses: 2 },
    { name: 'Prototipo',                                      dur: 'Mes 3',     meses: 1 },
    { name: 'Desarrollo Backend, Base de Datos y Frontend',   dur: 'Mes 5-10',  meses: 6 },
    { name: 'Pruebas y Corrección de Errores',                dur: 'Mes 5',     meses: 1 },
    { name: 'Lanzamiento Versión Alfa',                       dur: 'Mes 11',    meses: 1 },
    { name: 'Soporte',                                        dur: 'Mes 12-13', meses: 2 },
    { name: 'Lanzamiento Versión Beta',                       dur: 'Mes 14',    meses: 1 },
    { name: 'Marketing, Publicidad y Cierre',                 dur: 'Mes 15-16', meses: 2 },
  ];

  // Exactamente 4 riesgos según el Acta de Constitución
  risks = [
    {
      num: '01', prob: 'Alta',  imp: 'Alto',
      desc: 'Rotación o falta de disponibilidad de miembros clave del equipo de desarrollo.',
      mit:  'Documentación continua del código y transferencia de conocimiento entre miembros del equipo.'
    },
    {
      num: '02', prob: 'Media', imp: 'Alto',
      desc: 'Cambios en los requisitos que generen retrabajo y aumenten los costos del proyecto.',
      mit:  'Control formal de cambios; congelamiento de requisitos aprobados por fase.'
    },
    {
      num: '03', prob: 'Media', imp: 'Alto',
      desc: 'Fases que superen lo planificado, excediendo la contingencia del 20%.',
      mit:  'Seguimiento semanal del cronograma Gantt y ajuste de recursos según avance real.'
    },
    {
      num: '04', prob: 'Baja',  imp: 'Alto',
      desc: 'Vulnerabilidades de seguridad que comprometan datos de clientes y mascotas.',
      mit:  'Auditorías de seguridad, pruebas de penetración y cifrado de datos sensibles con BCrypt/HTTPS.'
    },
  ];

  // 7 entregables principales
  deliverables = [
    { num: '01', desc: 'Documento de Especificación de Requisitos de Software (ERS) con diagramas UML' },
    { num: '02', desc: 'Prototipo interactivo validado y aprobado por el cliente' },
    { num: '03', desc: 'Módulos de software: registro, citas, historial, inventario, facturación e IA' },
    { num: '04', desc: 'Informe de pruebas: unitarias (JUnit 5), integración y aceptación (UAT)' },
    { num: '05', desc: 'Versión Alfa desplegada en entorno de producción con módulos básicos operativos' },
    { num: '06', desc: 'Versión Beta completa con todos los módulos e inteligencia artificial integrada' },
    { num: '07', desc: 'Documentación técnica final, manual de usuario y acta de cierre del proyecto' },
  ];

  ganttMonths = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  ganttRows = [
    { name: 'Elicitación',     start: 1,  end: 1  },
    { name: 'Arq. UML',        start: 2,  end: 2  },
    { name: 'Métricas/Diseño', start: 3,  end: 4  },
    { name: 'Prototipo',       start: 3,  end: 3  },
    { name: 'Desarrollo',      start: 5,  end: 10 },
    { name: 'Pruebas',         start: 5,  end: 5  },
    { name: 'Versión Alfa',    start: 11, end: 11 },
    { name: 'Soporte',         start: 12, end: 13 },
    { name: 'Versión Beta',    start: 14, end: 14 },
    { name: 'Mktg/Cierre',     start: 15, end: 16 },
  ];

  isActive(row: {start:number, end:number}, month: number): boolean {
    return month >= row.start && month <= row.end;
  }
}
