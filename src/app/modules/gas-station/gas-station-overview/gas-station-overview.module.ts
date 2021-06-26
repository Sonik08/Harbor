import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ListModule } from 'src/app/base-components/list/list.module';
import { GasStationOverviewComponent } from './gas-station-overview.component';

@NgModule({
  declarations: [GasStationOverviewComponent],
  imports: [CommonModule, ListModule, MatIconModule]
})
export class GasStationOverviewModule {}
