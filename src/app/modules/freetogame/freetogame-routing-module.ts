import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFreeToGameComponent } from './pages/list-freetogame/list-freetogame.component';

/**
 * Rutas del módulo Free to Game.
 *
 * @remarks
 * Define la ruta raíz del módulo que carga el componente
 * `ListFreeToGameComponent` como página principal.
 */
const routes: Routes = [
  { path: '', component: ListFreeToGameComponent }
];


/**
 * Módulo de enrutamiento para el feature module FreeToGame.
 * 
 * @remarks
 * Configura las rutas específicas del módulo de juegos gratuitos.
 * Se importa en {@link FreeToGameModule} para habilitar la navegación.
 * 
 * Utiliza `RouterModule.forChild()` ya que es un módulo lazy-loaded.
 * 
 * @example
 * ```typescript
 * // Configuración en app-routing-module.ts
 * {
 *   path: 'freetogame',
 *   loadChildren: () => import('./modules/freetogame/freetogame.module')
 *     .then(m => m.FreeToGameModule)
 * }
 * ```
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreetogameRoutingModule { }
