import { NgModule } from '@angular/core';
import { GasStationListModule } from './gas-station-list/gas-station-list.module';
import { GasStationOverviewModule } from './gas-station-overview/gas-station-overview.module';
import { GasStationRoutingModule } from './gas-station-routing.module';

@NgModule({
  declarations: [],
  imports: [GasStationListModule, GasStationOverviewModule, GasStationRoutingModule]
})
export class GasStationModule {}
