import { Component, OnInit, Inject } from '@angular/core';
import { FreeToGameService } from './services/freetogame.service';
import { FreeToGame } from './interfaces/freetogame';

/**
 * Componente encargado de mostrar una lista de juegos gratuitos obtenidos
 * desde la API FreeToGame mediante el servicio FreeToGameService.
 *
 * @remarks
 * - Al inicializarse el componente (`ngOnInit`), se realiza una petición GET
 *   al servicio para obtener la lista de juegos.
 * - Los datos recibidos se almacenan en la propiedad `games`.
 * - Esta propiedad puede utilizarse en la plantilla HTML para mostrar
 *   la información de los juegos (nombre, género, plataforma, etc.).
 *
 * @example
 * Para usar este componente en una plantilla de Angular:
 * ```html
 * <app-freetogame></app-freetogame>
 * ```
 *
 * Al incluir esta etiqueta, el componente se renderiza y muestra
 * los juegos gratuitos obtenidos del servicio.
 */
@Component({
  selector: 'app-freetogame',
  template: `<div><p>Free to Game Component</p></div>`,
  standalone: false,
  providers: [FreeToGameService]
})


export class FreeToGameComponent implements OnInit {
  /**
   * Lista de juegos obtenidos desde el servicio FreeToGameService.
   */
  games: FreeToGame[] = [];
  error: any;

  /**
   * Constructor del componente.
   * Inyecta el servicio FreeToGameService para consumir la API de juegos.
   */
  constructor(@Inject(FreeToGameService) private gameService: FreeToGameService) {}

   /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente.
   * Aquí se realiza la llamada al servicio para obtener los juegos
   * mediante una petición HTTP GET.
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