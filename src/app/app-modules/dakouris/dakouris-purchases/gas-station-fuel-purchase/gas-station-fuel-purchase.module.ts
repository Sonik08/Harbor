import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { GasStationFuelPurchaseComponent } from './gas-station-fuel-purchase.component';

@NgModule({
  declarations: [GasStationFuelPurchaseComponent],
  imports: [CommonModule, FormControlsModule, FormRowModule],
  exports: [GasStationFuelPurchaseComponent]
})
export class GasStationFuelPurchaseModule {}
