import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExpantionPanelComponent } from './material-expantion-panel.component';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialListModule } from '../material-list/material-list.module';



@NgModule({
  declarations: [MaterialExpantionPanelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialListModule
  ],
  exports: [MaterialExpantionPanelComponent]
})
export class MeterialExpantionPanelModule { }
