import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GasStationListModule } from './../../modules/gas-station/gas-station-list/gas-station-list.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, GasStationListModule],
  exports: [DashboardComponent]
})
export class DashboardModule {}
