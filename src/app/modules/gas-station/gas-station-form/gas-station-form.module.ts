import { GasStationComponent } from './gas-station-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [GasStationComponent],
  imports: [
    CommonModule
  ],
  exports: [GasStationComponent]
})
export class GasStationFormModule { }
