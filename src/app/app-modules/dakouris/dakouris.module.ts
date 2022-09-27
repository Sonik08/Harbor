import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DakourisFuelsModule } from './dakouris-fuels/dakouris-fuel-lookup/dakouris-fuels.module';
import { DakourisOverviewModule } from './dakouris-overview/dakouris-overview.module';
import { DakourisRoutingModule } from './dakouris-routing.module';
import { DakourisGasStationsModule } from './lookups/dakouris-gas-stations/dakouris-gas-stations.module';
import { DakourisFuelDialogComponent } from './dakouris-fuels/dakouris-fuel-dialog/dakouris-fuel-dialog.component';

@NgModule({
  imports: [
    DakourisRoutingModule,
    DakourisOverviewModule,
    CommonModule,
    DakourisGasStationsModule,
    DakourisFuelsModule
  ]
})
export class DakourisModule {}
