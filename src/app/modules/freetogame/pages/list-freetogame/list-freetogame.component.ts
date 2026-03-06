import { Component, OnInit } from '@angular/core';
import { FreeToGame } from '../../interfaces/freetogame';
import { FreeToGameService } from '../../services/freetogame.service';

/**
 * Componente página para listar juegos gratuitos de FreeToGame.
 *
 * @description
 * Este componente actúa como contenedor principal (**template** en diseño atómico)
 * para la funcionalidad de consulta y visualización de juegos gratuitos.
 *
 * ## Responsabilidades
 * - Inicializar la carga de datos al renderizar (`ngOnInit`)
 * - Consumir el servicio {@link FreeToGameService}
 * - Manejar errores de la petición HTTP
 * - Pasar los datos al componente hijo {@link TableFreeToGameComponent}
 *
 * ## Patrón de arquitectura
 * Implementa el patrón **Smart/Presentational Components**:
 * | Tipo | Componente | Responsabilidad |
 * |------|------------|-----------------|
 * | Smart | `ListFreeToGameComponent` | Maneja lógica y estado |
 * | Presentational | `TableFreeToGameComponent` | Solo renderiza datos |
 *
 * ## Flujo de datos
 * ```
 * ListFreeToGameComponent (Smart)
 *         │
 *         ▼
 * FreeToGameService.getGames()
 *         │
 *         ▼
 * API FreeToGame (HTTP GET)
 *         │
 *         ▼
 * games[] ──────► TableFreeToGameComponent (Presentational)
 * ```
 *
 * @usageNotes
 * ### Configuración de ruta
 * ```typescript
 * // En freetogame-routing.module.ts
 * const routes: Routes = [
 *   { path: '', component: ListFreeToGameComponent }
 * ];
 * ```
 *
 * ### Uso en plantilla padre
 * ```html
 * <app-list-freetogame></app-list-freetogame>
 * ```
 *
 * @example
 * // Importar en el módulo
 * import { ListFreeToGameComponent } from './pages/list-freetogame/list-freetogame.component';
 *
 * @NgModule({
 *   declarations: [ListFreeToGameComponent]
 * })
 * export class FreetogameModule {}
 *
 * @see {@link FreeToGameService} - Servicio para consumo de la API
 * @see {@link TableFreeToGameComponent} - Componente hijo para renderizar la tabla
 * @see {@link FreeToGame} - Interfaz que define la estructura de un juego
 *
 * @export
 * @class ListFreeToGameComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-list-freetogame',
  templateUrl: './list-freetogame.component.html',
  standalone: false,
})
export class ListFreeToGameComponent implements OnInit {

  /**
   * Array que almacena la lista de juegos obtenidos desde la API.
   *
   * @description
   * Se inicializa como array vacío y se puebla cuando la petición
   * HTTP se completa exitosamente. Este array se pasa como `@Input`
   * al componente de tabla hijo {@link TableFreeToGameComponent}.
   *
   * @type {FreeToGame[]}
   * @default []
   * @memberof ListFreeToGameComponent
   *
   * @example
   * ```html
   * <!-- Pasar juegos al componente tabla -->
   * <app-table-freetogame [games]="games"></app-table-freetogame>
   * ```
   *
   * @example
   * ```html
   * <!-- Iterar sobre los juegos -->
   * <ul>
   *   <li *ngFor="let game of games">{{ game.title }}</li>
   * </ul>
   * ```
   */
  games: FreeToGame[] = [];

  /**
   * Mensaje de error en caso de fallo en la petición HTTP.
   *
   * @description
   * Almacena el mensaje de error cuando la solicitud al servicio
   * {@link FreeToGameService} falla. Permite mostrar feedback visual
   * al usuario sobre problemas de conectividad o errores del servidor.
   *
   * ## Posibles valores
   * - `undefined`: No ha ocurrido ningún error
   * - `string`: Mensaje descriptivo del error ocurrido
   *
   * @type {string | undefined}
   * @default undefined
   * @memberof ListFreeToGameComponent
   *
   * @example
   * ```html
   * <!-- Mostrar mensaje de error al usuario -->
   * <div *ngIf="error" class="alert alert-danger">
   *   <strong>Error:</strong> {{ error }}
   * </div>
   * ```
   *
   * @example
   * ```html
   * <!-- Mostrar contenido condicional -->
   * <ng-container *ngIf="!error; else errorTemplate">
   *   <app-table-freetogame [games]="games"></app-table-freetogame>
   * </ng-container>
   * <ng-template #errorTemplate>
   *   <p>No se pudieron cargar los juegos: {{ error }}</p>
   * </ng-template>
   * ```
   */
  error: string | undefined;

  /**
   * Crea una instancia del componente ListFreeToGameComponent.
   *
   * @description
   * Inyecta el servicio {@link FreeToGameService} mediante inyección
   * de dependencias de Angular. El servicio se utiliza en {@link ngOnInit}
   * para obtener los datos de la API.
   *
   * @param {FreeToGameService} gameService - Servicio para consumir la API de FreeToGame.
   *        Proporciona el método `getGames()` que retorna un `Observable<FreeToGame[]>`.
   * @memberof ListFreeToGameComponent
   */
  constructor(private gameService: FreeToGameService) {}

  /**
   * Hook del ciclo de vida que se ejecuta al inicializar el componente.
   *
   * @description
   * Realiza la suscripción al Observable retornado por
   * {@link FreeToGameService#getGames} para cargar los datos de la API
   * tan pronto como el componente se renderiza.
   *
   * ## Comportamiento
   * | Escenario | Acción |
   * |-----------|--------|
   * | Éxito | Asigna los datos a `this.games` |
   * | Error | Registra en consola y asigna mensaje a `this.error` |
   *
   * ## Manejo de errores
   * En caso de error, el componente:
   * 1. Registra el error en la consola (`console.error`)
   * 2. Asigna el mensaje de error a `this.error`
   * 3. Limpia el array `this.games` asignando un array vacío
   *
   * @returns {void} No retorna ningún valor.
   * @memberof ListFreeToGameComponent
   * @implements OnInit
   *
   * @example
   * ```typescript
   * // El método se ejecuta automáticamente al renderizar
   * // Equivalente interno:
   * this.gameService.getGames().subscribe({
   *   next: (data) => this.games = data,
   *   error: (err) => this.error = err.message
   * });
   * ```
   */
  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (data) => {
        this.games = data;
      },
      error: (err) => {
        console.error('Error cargando juegos:', err);
        this.error = err.message;
        this.games = [];
      }
    });
  }
}
