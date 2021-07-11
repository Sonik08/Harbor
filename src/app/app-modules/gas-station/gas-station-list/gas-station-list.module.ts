import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialTableModule } from 'src/app/base-modules/material-table/material-table.module';
import { GasStationListComponent } from './gas-station-list.component';

@NgModule({
  declarations: [GasStationListComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [GasStationListComponent]
})
export class GasStationListModule {}
