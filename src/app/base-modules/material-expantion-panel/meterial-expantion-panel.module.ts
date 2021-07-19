import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExpantionPanelComponent } from './material-expantion-panel.component';
import { MaterialModule } from 'src/app/core/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialExpantionPanelComponent,
    MaterialModule
  ]
})
export class MeterialExpantionPanelModule { }
