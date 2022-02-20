import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GasStationTableModule } from '../../app-modules/gas-station/gas-station-table/gas-station-table.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, GasStationTableModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
