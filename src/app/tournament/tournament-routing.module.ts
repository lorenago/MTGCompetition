import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TournamentComponent } from './tournament.component';

const tournamentRoutes: Routes = [
  {
    path: 'tournament',
    component: TournamentComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(tournamentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TournamentRoutingModule { }
