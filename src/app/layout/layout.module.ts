import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MainLayoutRoutingModule
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }
