import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { CounterModule } from './counter/counter.module';
import { TournamentModule } from './tournament/tournament.module';
import { CustomIconService } from './services/custom-icon.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatIconModule,
    HttpClientModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    CounterModule,
    TournamentModule
  ],
  providers: [CustomIconService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
