import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GasStationComponent } from './gas-station-form.component';

@NgModule({
  declarations: [GasStationComponent],
  imports: [CommonModule],
  exports: [GasStationComponent]
})
export class GasStationFormModule {}
