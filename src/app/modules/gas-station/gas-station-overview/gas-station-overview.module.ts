import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GasStationOverviewComponent } from './gas-station-overview.component';

@NgModule({
  declarations: [GasStationOverviewComponent],
  imports: [CommonModule, MatIconModule]
})
export class GasStationOverviewModule {}
