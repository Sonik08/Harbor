import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasStationListComponent } from './gas-station-list.component';



@NgModule({
  declarations: [GasStationListComponent],
  imports: [
    CommonModule
  ],
  exports: [GasStationListComponent]
})
export class GasStationListModule { }
