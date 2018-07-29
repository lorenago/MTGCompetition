import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../node_modules/@angular/router";

import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { CounterComponent } from "../counter/counter.component";
import { TournamentComponent } from "../tournament/tournament.component";


const mainLayoutRoutes: Routes = [
    {
        path: 'main',
        component: MainLayoutComponent,
        children: [
            { path:'', component: CounterComponent, pathMatch: 'full'},
            { path:'counter', component: CounterComponent},
            { path:'tournament', component: TournamentComponent}
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(mainLayoutRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MainLayoutRoutingModule {}