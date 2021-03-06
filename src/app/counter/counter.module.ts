import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CounterRoutingModule,
    LayoutModule
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
