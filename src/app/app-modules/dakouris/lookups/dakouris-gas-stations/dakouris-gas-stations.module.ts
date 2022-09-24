import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DakourisGasStationsComponent } from './dakouris-gas-stations.component';
import { MaterialLookupModule } from 'src/app/core/material-lookup/material-lookup.module';

@NgModule({
  declarations: [DakourisGasStationsComponent],
  imports: [CommonModule, MaterialLookupModule],
  exports: [DakourisGasStationsComponent]
})
export class DakourisGasStationsModule {}
