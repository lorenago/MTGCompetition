import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentComponent } from 'src/app/tournament/tournament.component';
import { TournamentRoutingModule } from 'src/app/tournament/tournament-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TournamentRoutingModule
  ],
  declarations: []
})
export class TournamentModule { }
