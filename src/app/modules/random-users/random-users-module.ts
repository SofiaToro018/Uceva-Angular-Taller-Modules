import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomUsersRoutingModule } from './random-users-routing-module';
import { ListRandomUsersComponent } from './pages/list-random-users/list-random-users.component';
import { TableRandomUsersComponent } from './components/table-random-users/table-random-users.component';

/**
 * Módulo encargado de gestionar los usuarios
 * obtenidos desde la API RandomUser
 */
@NgModule({
  declarations: [
    TableRandomUsersComponent,
    ListRandomUsersComponent
  ],
  imports: [
    CommonModule,
    RandomUsersRoutingModule
  ]
})
export class RandomUsersModule { }
