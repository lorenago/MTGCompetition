import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CounterRoutingModule,
    LayoutModule,
    IonicModule
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
