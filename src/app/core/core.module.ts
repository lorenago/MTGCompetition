import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MatToolbarModule, MatListModule, MatDividerModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    RouterModule.forChild([])
  ],
  declarations: [TopMenuComponent],
  exports: [TopMenuComponent]
})
export class CoreModule { }
