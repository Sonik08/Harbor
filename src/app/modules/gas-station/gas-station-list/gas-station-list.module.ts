import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GasStationListComponent } from './gas-station-list.component';
import { TableModule } from 'src/app/base-components/table/table.module';

@NgModule({
  declarations: [GasStationListComponent],
  imports: [CommonModule, TableModule],
  exports: [GasStationListComponent]
})
export class GasStationListModule {}
