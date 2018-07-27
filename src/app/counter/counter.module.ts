import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from 'src/app/counter/counter-routing.module';
import { CounterComponent } from 'src/app/counter/counter.component';


@NgModule({
  imports: [
    CommonModule,
    CounterComponent,
    CounterRoutingModule
  ],
  declarations: []
})
export class CounterModule { }
