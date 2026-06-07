import { Component } from '@angular/core';

@Component({
  selector: 'app-calidad-software',
  imports: [],
  templateUrl: './calidad-software.html',
  styleUrl: './calidad-software.css',
})
export class CalidadSoftware {
  activeTab = 'u1';

  tabs = [
    { id: 'u1', label: 'Unidad 1', title: 'Atributos y Métricas'   },
    { id: 'u2', label: 'Unidad 2', title: 'Requisitos y Diseño'    },
    { id: 'u3', label: 'Unidad 3', title: 'Código Limpio'          },
    { id: 'u4', label: 'Unidad 4', title: 'Pruebas'                },
    { id: 'u5', label: 'Unidad 5', title: 'Arquitectura Limpia'    },
  ];

  solid = [
    { sigla: 'S — SRP', nombre: 'Single Responsibility Principle', aplicacion: 'Cada clase de servicio tiene una única responsabilidad. PetService solo gestiona lógica de mascotas.' },
    { sigla: 'O — OCP', nombre: 'Open/Closed Principle',           aplicacion: 'La arquitectura permite agregar nuevos módulos sin modificar el núcleo existente.' },
    { sigla: 'L — LSP', nombre: 'Liskov Substitution Principle',   aplicacion: 'Las implementaciones de interfaces son intercambiables en toda la aplicación.' },
    { sigla: 'I — ISP', nombre: 'Interface Segregation Principle',  aplicacion: 'Interfaces separadas por dominio: IPetService, IAppointmentService, IBillingService.' },
    { sigla: 'D — DIP', nombre: 'Dependency Inversion Principle',   aplicacion: 'Inyección de dependencias con Spring Boot. Los controladores dependen de abstracciones.' },
    { sigla: 'DRY',     nombre: "Don't Repeat Yourself",           aplicacion: 'Validadores, DTOs y mappers son reutilizados en todos los módulos sin duplicación.' },
  ];

  metricas = [
    { nombre: 'Complejidad Ciclomática (CC)',    umbral: '10 o menos por método',    estado: 'Controlada',   nivel: 'ok'   },
    { nombre: 'Duplicación de Código',           umbral: 'Menos del 5%',             estado: 'Reducida',     nivel: 'ok'   },
    { nombre: 'Cobertura JaCoCo (Java)',         umbral: '80% o más',                estado: '6 % actual',   nivel: 'warn' },
    { nombre: 'Líneas por Método (LOC)',         umbral: '20 líneas o menos',        estado: 'Controlada',   nivel: 'ok'   },
    { nombre: 'Acoplamiento entre Clases (CBO)', umbral: 'Bajo acoplamiento',        estado: 'Adecuado',     nivel: 'ok'   },
    { nombre: 'Cohesión (LCOM)',                 umbral: 'Alta cohesión',            estado: 'Adecuado',     nivel: 'ok'   },
    { nombre: 'Puntos Función Ajustados (AFP)',  umbral: 'Referencia de estimación', estado: 'Calculados',   nivel: 'ok'   },
  ];

  // Datos reales del Informe 4 — BUILD SUCCESS 26 PASSED (Java)
  testResults = [
    { clase: 'PetServiceTest.java',            pruebas: 12, estado: 'PASS', cobertura: 'Services 4%'  },
    { clase: 'JwtTokenProviderTest.java',      pruebas: 13, estado: 'PASS', cobertura: 'Security 3%'  },
    { clase: 'PetStoreApplicationTests.java',  pruebas:  1, estado: 'PASS', cobertura: 'Config 41%'   },
    { clase: 'test_predictor.py (Python IA)',  pruebas:  9, estado: 'PASS', cobertura: 'FastAPI'       },
    { clase: 'test_chatbot.py (Python IA)',    pruebas:  4, estado: 'PASS', cobertura: 'FastAPI'       },
    { clase: 'Frontend React (Vitest)',        pruebas:  4, estado: 'PASS', cobertura: 'React/TS'      },
  ];
}
