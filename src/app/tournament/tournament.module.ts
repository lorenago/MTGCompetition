import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from 'src/app/tournament/tournament-routing.module';
import { TournamentComponent } from 'src/app/tournament/tournament.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TournamentRoutingModule,
    LayoutModule
  ],
  declarations: [
    TournamentComponent
  ],
  exports: [
    TournamentComponent
  ]
})
export class TournamentModule { }
