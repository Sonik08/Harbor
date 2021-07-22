import { NgModule } from '@angular/core';
import { GasStationFormModule } from './gas-station-form/gas-station-form.module';
import { GasStationListModule } from './gas-station-list/gas-station-list.module';
import { GasStationOverviewModule } from './gas-station-overview/gas-station-overview.module';
import { GasStationRoutingModule } from './gas-station-routing.module';
import { ShiftFormModule } from './shift-form/shift-form.module';
import { ShiftListModule } from './shift-list/shift-list.module';

@NgModule({
  declarations: [],
  imports: [GasStationListModule, GasStationOverviewModule, GasStationRoutingModule, ShiftFormModule, ShiftListModule, GasStationFormModule]
})
export class GasStationModule {}
