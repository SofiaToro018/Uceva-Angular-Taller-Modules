import { Component, OnInit } from '@angular/core';
import { FreeToGame } from '../../interfaces/freetogame';
import { FreeToGameService } from '../../services/freetogame.service';
/**
 * Componente página para listar juegos gratuitos de FreeToGame.
 * 
 * @remarks
 * Este componente actúa como contenedor principal (**template** en diseño atómico)
 * para la funcionalidad de consulta y visualización de juegos gratuitos.
 * 
 * Se encarga de:
 * - Inicializar la carga de datos al renderizar (ngOnInit)
 * - Consumir el servicio {@link FreeToGameService}
 * - Manejar errores de la petición HTTP
 * - Pasar los datos al componente hijo {@link TableFreeToGameComponent}
 * 
 * Implementa el patrón de arquitectura Smart/Presentational Components:
 * - **Smart Component**: Este componente (maneja lógica y estado)
 * - **Presentational Component**: TableFreeToGameComponent (solo renderiza)
 * 
 * @example
 * ```typescript
 * // Ruta configurada en freetogame-routing.module.ts
 * { path: '', component: ListFreeToGameComponent }
 * ```
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
   * @remarks
   * Se inicializa como array vacío y se puebla cuando la petición
   * HTTP se completa exitosamente. Este array se pasa como input
   * al componente de tabla hijo.
   */
  games: FreeToGame[] = [];
  error: any;
  /**
   * Constructor del componente.
   * 
   * @param gameService - Servicio inyectado para consumir la API de FreeToGame.
   */

  constructor(private gameService: FreeToGameService) {}
  /**
   * Hook del ciclo de vida que se ejecuta al inicializar el componente.
   * 
   * @remarks
   * Invoca el método {@link loadGames} para cargar los datos de la API
   * tan pronto como el componente se renderiza.
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
