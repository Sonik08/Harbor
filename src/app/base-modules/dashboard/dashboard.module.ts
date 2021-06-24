import { GasStationListModule } from './../../modules/gas-station/gas-station-list/gas-station-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, GasStationListModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
