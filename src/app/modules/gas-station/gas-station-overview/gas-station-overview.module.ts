import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListModule } from 'src/app/base-components/list/list.module';
import { GasStationOverviewComponent } from './gas-station-overview.component';

@NgModule({
  declarations: [GasStationOverviewComponent],
  imports: [CommonModule, ListModule]
})
export class GasStationOverviewModule {}
