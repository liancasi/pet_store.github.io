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
    { id: 'u1', label: 'Unidad 1', title: 'Atributos y Metricas'  },
    { id: 'u2', label: 'Unidad 2', title: 'Requisitos y Diseno'   },
    { id: 'u3', label: 'Unidad 3', title: 'Codigo Limpio'          },
    { id: 'u4', label: 'Unidad 4', title: 'Pruebas'               },
    { id: 'u5', label: 'Unidad 5', title: 'Arquitectura Limpia'   },
  ];

  solid = [
    { sigla: 'S — SRP', nombre: 'Single Responsibility Principle', aplicacion: 'Cada clase de servicio tiene una unica responsabilidad. PetService solo gestiona logica de mascotas.' },
    { sigla: 'O — OCP', nombre: 'Open/Closed Principle',           aplicacion: 'La arquitectura permite agregar nuevos modulos sin modificar el nucleo existente.' },
    { sigla: 'L — LSP', nombre: 'Liskov Substitution Principle',   aplicacion: 'Las implementaciones de interfaces son intercambiables en toda la aplicacion.' },
    { sigla: 'I — ISP', nombre: 'Interface Segregation Principle',  aplicacion: 'Interfaces separadas por dominio: IPetService, IAppointmentService, IBillingService.' },
    { sigla: 'D — DIP', nombre: 'Dependency Inversion Principle',   aplicacion: 'Inyeccion de dependencias con Spring Boot. Los controladores dependen de abstracciones.' },
    { sigla: 'DRY',     nombre: "Don't Repeat Yourself",           aplicacion: 'Validadores, DTOs y mappers son reutilizados en todos los modulos sin duplicacion.' },
  ];

  metricas = [
    { nombre: 'Complejidad Ciclomatica (CC)', umbral: '10 o menos por metodo', estado: 'Controlada', nivel: 'ok' },
    { nombre: 'Duplicacion de Codigo',        umbral: 'Menos del 5%',          estado: 'Reducida',   nivel: 'ok' },
    { nombre: 'Cobertura de Pruebas (JaCoCo)',umbral: '80% o mas',             estado: 'En progreso',nivel: 'warn' },
    { nombre: 'Lineas por Metodo (LOC)',      umbral: '20 lineas o menos',     estado: 'Controlada', nivel: 'ok' },
    { nombre: 'Acoplamiento entre Clases (CBO)', umbral: 'Bajo acoplamiento',  estado: 'Adecuado',   nivel: 'ok' },
    { nombre: 'Cohesion (LCOM)',              umbral: 'Alta cohesion',          estado: 'Adecuado',   nivel: 'ok' },
    { nombre: 'Puntos Funcion Ajustados (AFP)',umbral: 'Referencia de estimacion', estado: 'Calculados', nivel: 'ok' },
  ];

  testResults = [
    { clase: 'JwtTokenProviderTest.java',   pruebas: 14, estado: 'PASS', cobertura: '94%' },
    { clase: 'PetServiceTest.java',          pruebas: 12, estado: 'PASS', cobertura: '88%' },
    { clase: 'LoginServiceTest.java',        pruebas: 7,  estado: 'PASS', cobertura: '91%' },
    { clase: 'AppointmentServiceTest.java',  pruebas: 10, estado: 'PASS', cobertura: '85%' },
    { clase: 'InventoryServiceTest.java',    pruebas: 8,  estado: 'PASS', cobertura: '82%' },
    { clase: 'BillingServiceTest.java',      pruebas: 9,  estado: 'PASS', cobertura: '87%' },
  ];
}
