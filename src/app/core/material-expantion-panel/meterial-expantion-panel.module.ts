import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialListModule } from '../material-list/material-list.module';
import { MaterialExpantionPanelComponent } from './material-expantion-panel.component';

@NgModule({
  declarations: [MaterialExpantionPanelComponent],
  imports: [CommonModule, MaterialModule, MaterialListModule],
  exports: [MaterialExpantionPanelComponent]
})
export class MeterialExpantionPanelModule {}
