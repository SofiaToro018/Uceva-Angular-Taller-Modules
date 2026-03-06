import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRandomUsersComponent } from './pages/list-random-users/list-random-users.component';

/**
 * Rutas del módulo Random Users.
 *
 * @remarks
 * Define la ruta raíz del módulo que carga el componente
 * `ListRandomUsersComponent` como página principal.
 */
const routes: Routes = [
  {
    path: '',
    component: ListRandomUsersComponent
  }
];

/**
 * Módulo de enrutamiento para Random Users.
 *
 * @remarks
 * Configura las rutas hijas del módulo utilizando `RouterModule.forChild()`.
 * Se carga de forma lazy a través del `AppRoutingModule`.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomUsersRoutingModule { }
