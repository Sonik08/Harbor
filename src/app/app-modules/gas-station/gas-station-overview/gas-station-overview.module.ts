import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialListModule } from 'src/app/base-modules/material-list/material-list.module';
import { GasStationOverviewComponent } from './gas-station-overview.component';

@NgModule({
  imports: [CommonModule, MaterialListModule],
  declarations: [GasStationOverviewComponent]
})
export class GasStationOverviewModule {}
