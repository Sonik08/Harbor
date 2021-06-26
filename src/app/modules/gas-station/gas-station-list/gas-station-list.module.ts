import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'src/app/base-components/table/table.module';
import { GasStationListComponent } from './gas-station-list.component';

@NgModule({
  declarations: [GasStationListComponent],
  imports: [CommonModule, TableModule],
  exports: [GasStationListComponent]
})
export class GasStationListModule {}
