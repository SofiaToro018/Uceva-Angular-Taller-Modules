import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomUsersRoutingModule } from './random-users-routing-module';
import { TableRandomUsers } from './components/table-random-users/table-random-users.component';
import { ListRandomUsers } from './pages/list-random-users/list-random-users';


@NgModule({
  declarations: [
    TableRandomUsers,
    ListRandomUsers
  ],
  imports: [
    CommonModule,
    RandomUsersRoutingModule
  ]
})
export class RandomUsersModule { }
