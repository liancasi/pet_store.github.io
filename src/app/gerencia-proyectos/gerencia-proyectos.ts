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
    { id: 'proyecto',    label: 'Proyecto'     },
    { id: 'alcance',     label: 'Alcance / Tiempo / Costo' },
    { id: 'cronograma',  label: 'Cronograma'   },
    { id: 'estructura',  label: 'Estructura'   },
    { id: 'riesgos',     label: 'Riesgos'      },
    { id: 'ejecucion',   label: 'Ejecucion'    },
    { id: 'imagenes',    label: 'Imagenes'     },
  ];

  phases = [
    { name: 'Elicitacion de Requisitos',                      dur: 'Mes 1',    meses: 1 },
    { name: 'Analisis de Requerimientos y Arquitectura UML',  dur: 'Mes 2',    meses: 1 },
    { name: 'Metricas de Desarrollo, Diseno y Arquitectura',  dur: 'Mes 3-4',  meses: 2 },
    { name: 'Prototipo',                                      dur: 'Mes 3',    meses: 1 },
    { name: 'Desarrollo Backend, Base de Datos y Frontend',   dur: 'Mes 5-10', meses: 6 },
    { name: 'Pruebas y Correccion de Errores',                dur: 'Mes 5',    meses: 1 },
    { name: 'Lanzamiento Version Alfa',                       dur: 'Mes 11',   meses: 1 },
    { name: 'Soporte',                                        dur: 'Mes 12-13',meses: 2 },
    { name: 'Lanzamiento Version Beta',                       dur: 'Mes 14',   meses: 1 },
    { name: 'Marketing, Publicidad y Cierre',                 dur: 'Mes 15-16',meses: 2 },
  ];

  // Exactamente 4 riesgos segun el Acta de Constitucion
  risks = [
    {
      num: '01', prob: 'Alta',  imp: 'Alto',
      desc: 'Rotacion o falta de disponibilidad de miembros clave del equipo de desarrollo.',
      mit:  'Documentacion continua del codigo y transferencia de conocimiento entre miembros del equipo.'
    },
    {
      num: '02', prob: 'Media', imp: 'Alto',
      desc: 'Cambios en los requisitos que generen retrabajo y aumenten los costos del proyecto.',
      mit:  'Control formal de cambios; congelamiento de requisitos aprobados por fase.'
    },
    {
      num: '03', prob: 'Media', imp: 'Alto',
      desc: 'Fases que superen lo planificado, excediendo la contingencia del 20%.',
      mit:  'Seguimiento semanal del cronograma Gantt y ajuste de recursos segun avance real.'
    },
    {
      num: '04', prob: 'Baja',  imp: 'Alto',
      desc: 'Vulnerabilidades de seguridad que comprometan datos de clientes y mascotas.',
      mit:  'Auditorias de seguridad, pruebas de penetracion y cifrado de datos sensibles con BCrypt/HTTPS.'
    },
  ];

  // 7 entregables principales
  deliverables = [
    { num: '01', desc: 'Documento de Especificacion de Requisitos de Software (ERS) con diagramas UML' },
    { num: '02', desc: 'Prototipo interactivo validado y aprobado por el cliente' },
    { num: '03', desc: 'Modulos de software: registro, citas, historial, inventario, facturacion e IA' },
    { num: '04', desc: 'Informe de pruebas: unitarias (JUnit 5), integracion y aceptacion (UAT)' },
    { num: '05', desc: 'Version Alfa desplegada en entorno de produccion con modulos basicos operativos' },
    { num: '06', desc: 'Version Beta completa con todos los modulos e inteligencia artificial integrada' },
    { num: '07', desc: 'Documentacion tecnica final, manual de usuario y acta de cierre del proyecto' },
  ];

  ganttMonths = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  ganttRows = [
    { name: 'Elicitacion',    start: 1,  end: 1  },
    { name: 'Arq. UML',       start: 2,  end: 2  },
    { name: 'Metricas/Diseno',start: 3,  end: 4  },
    { name: 'Prototipo',      start: 3,  end: 3  },
    { name: 'Desarrollo',     start: 5,  end: 10 },
    { name: 'Pruebas',        start: 5,  end: 5  },
    { name: 'Version Alfa',   start: 11, end: 11 },
    { name: 'Soporte',        start: 12, end: 13 },
    { name: 'Version Beta',   start: 14, end: 14 },
    { name: 'Marketing/Cierre',start:15, end: 16 },
  ];

  isActive(row: {start:number, end:number}, month: number): boolean {
    return month >= row.start && month <= row.end;
  }
}
