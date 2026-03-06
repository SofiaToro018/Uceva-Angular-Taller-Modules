import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreetogameRoutingModule } from './freetogame-routing-module';
import { TableFreeToGameComponent } from './components/table-freetogame/table-freetogame.component';
import { ListFreeToGameComponent } from './pages/list-freetogame/list-freetogame.component';

/**
 * Módulo feature para la gestión y visualización de juegos gratuitos.
 * 
 * @remarks
 * Este módulo encapsula toda la funcionalidad relacionada con la consulta
 * y presentación de juegos gratuitos desde la API de FreeToGame.
 * 
 * **Responsabilidades:**
 * - Consumir la API REST de FreeToGame
 * - Renderizar listados de juegos en tabla
 * - Gestionar el enrutamiento interno del feature
 * 
 * **Arquitectura:**
 * - **Lazy Loading**: Se carga bajo demanda desde la ruta `/freetogame`
 * - **Modularidad**: Aislado del resto de la aplicación
 * - **Separation of Concerns**: Separa lógica (service), presentación (components) y navegación (routing)
 * 
 * **Componentes declarados:**
 * - {@link ListFreeToGameComponent} - Página de listado (Smart Component)
 * - {@link TableFreeToGameComponent} - Tabla de juegos (Presentational Component)
 * 
 * **Servicios proporcionados:**
 * - {@link FreeToGameService} - Consumo de API (providedIn: 'root')
 * 
 * @example
 * ```typescript
 * // Carga lazy en app-routing-module.ts
 * {
 *   path: 'freetogame',
 *   loadChildren: () => import('./modules/freetogame/freetogame.module')
 *     .then(m => m.FreeToGameModule)
 * }
 * ```
 * 
 * @see {@link https://www.freetogame.com/api-doc | API de FreeToGame}
 */
@NgModule({
  /**
   * Componentes, directivas y pipes que pertenecen a este módulo.
   */
  declarations: [
    TableFreeToGameComponent,
    ListFreeToGameComponent
  ],
  /**
   * Módulos externos necesarios para el funcionamiento del feature.
   * 
   * @remarks
   * - **CommonModule**: Directivas básicas de Angular (*ngIf, *ngFor)
   * - **HttpClientModule**: Cliente HTTP para peticiones REST
   * - **FreeToGameRoutingModule**: Configuración de rutas del módulo
   */
  imports: [
    CommonModule,
    FreetogameRoutingModule
  ]
})
export class FreetogameModule { }
