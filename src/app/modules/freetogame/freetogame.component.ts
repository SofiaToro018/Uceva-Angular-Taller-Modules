import { Component, OnInit, Inject } from '@angular/core';
import { FreeToGameService } from './services/freetogame.service';
import { FreeToGame } from './interfaces/freetogame';

/**
 * Componente raíz del módulo FreeToGame.
 *
 * @description
 * Componente encargado de mostrar una lista de juegos gratuitos obtenidos
 * desde la API pública de FreeToGame. Actúa como punto de entrada del módulo
 * y orquesta la carga de datos mediante el servicio {@link FreeToGameService}.
 *
 * ## Responsabilidades
 * - Inicializar la carga de juegos al renderizarse
 * - Almacenar el estado de los juegos obtenidos
 * - Gestionar errores de la petición HTTP
 *
 * ## Arquitectura
 * Este componente sigue el patrón **Smart Component**, manejando la lógica
 * de negocio y delegando la presentación a componentes hijos.
 *
 * ## Flujo de datos
 * ```
 * ngOnInit() -> FreeToGameService.getGames() -> API FreeToGame -> games[]
 * ```
 *
 * @usageNotes
 * ### Uso básico
 * ```html
 * <app-freetogame></app-freetogame>
 * ```
 *
 * ### Integración en rutas
 * ```typescript
 * const routes: Routes = [
 *   { path: 'games', component: FreeToGameComponent }
 * ];
 * ```
 *
 * @example
 * // Ejemplo de uso en un módulo
 * import { FreeToGameComponent } from './freetogame.component';
 *
 * @NgModule({
 *   declarations: [FreeToGameComponent],
 *   exports: [FreeToGameComponent]
 * })
 * export class FreeToGameModule {}
 *
 * @see {@link FreeToGameService} - Servicio para consumo de la API
 * @see {@link FreeToGame} - Interfaz que define la estructura de un juego
 * @see {@link https://www.freetogame.com/api-doc | Documentación API FreeToGame}
 *
 * @export
 * @class FreeToGameComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-freetogame',
  template: `<div><p>Free to Game Component</p></div>`,
  standalone: false,
  providers: [FreeToGameService]
})
export class FreeToGameComponent implements OnInit {

  /**
   * Lista de juegos gratuitos obtenidos desde la API.
   *
   * @description
   * Array que almacena los objetos {@link FreeToGame} retornados por el servicio.
   * Se inicializa como array vacío y se puebla cuando la petición HTTP
   * se completa exitosamente en el método {@link ngOnInit}.
   *
   * @type {FreeToGame[]}
   * @default []
   * @memberof FreeToGameComponent
   *
   * @example
   * // Acceder a los juegos en la plantilla
   * <div *ngFor="let game of games">
   *   {{ game.title }} - {{ game.genre }}
   * </div>
   */
  games: FreeToGame[] = [];

  /**
   * Mensaje de error en caso de fallo en la petición HTTP.
   *
   * @description
   * Almacena el mensaje de error cuando la solicitud al servicio falla.
   * Permite mostrar feedback al usuario sobre problemas de conectividad
   * o errores del servidor.
   *
   * @type {string | undefined}
   * @default undefined
   * @memberof FreeToGameComponent
   *
   * @example
   * // Mostrar error en la plantilla
   * <div *ngIf="error" class="error-message">
   *   {{ error }}
   * </div>
   */
  error: string | undefined;

  /**
   * Crea una instancia del componente FreeToGameComponent.
   *
   * @description
   * Inyecta el servicio {@link FreeToGameService} necesario para
   * realizar las peticiones HTTP a la API de FreeToGame.
   *
   * @param {FreeToGameService} gameService - Servicio para consumir la API de juegos gratuitos.
   * @memberof FreeToGameComponent
   */
  constructor(@Inject(FreeToGameService) private gameService: FreeToGameService) {}

  /**
   * Hook del ciclo de vida que se ejecuta al inicializar el componente.
   *
   * @description
   * Realiza la llamada al servicio {@link FreeToGameService#getGames} para
   * obtener la lista de juegos gratuitos desde la API. Los datos se asignan
   * a la propiedad {@link games} en caso de éxito, o se captura el error
   * en la propiedad {@link error} si la petición falla.
   *
   * ## Comportamiento
   * 1. Suscribe al Observable retornado por `getGames()`
   * 2. En caso de éxito: asigna los datos a `this.games`
   * 3. En caso de error: asigna el mensaje a `this.error`
   *
   * @returns {void}
   * @memberof FreeToGameComponent
   * @implements OnInit
   *
   * @example
   * // El método se ejecuta automáticamente al renderizar el componente
   * // No requiere invocación manual
   */
  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (data: FreeToGame[]): void => {
        this.games = data;
      },
      error: (err) => {
        this.error = err.message;
      }
    });
  }
}
