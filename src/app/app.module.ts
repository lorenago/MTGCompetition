import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { CounterModule } from './counter/counter.module';
import { TournamentModule } from './tournament/tournament.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    CounterModule,
    TournamentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
