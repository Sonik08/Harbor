import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';
import { GasStationTableComponent } from './gas-station-table.component';

@NgModule({
  declarations: [GasStationTableComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [GasStationTableComponent]
})
export class GasStationTableModule {}
