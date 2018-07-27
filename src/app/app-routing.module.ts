import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CounterComponent } from 'src/app/counter/counter.component';
import { TournamentComponent } from 'src/app/tournament/tournament.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'counter'
    },
    {
        path: 'counter', component: CounterComponent
    },
    {
        path: 'tournament', component: TournamentComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }