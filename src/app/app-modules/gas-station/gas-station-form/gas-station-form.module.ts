import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { GasStationFormComponent } from './gas-station-form.component';

@NgModule({
  declarations: [GasStationFormComponent],
  imports: [CommonModule, FormControlsModule, BaseFormModule, FormRowModule],
  exports: [GasStationFormComponent]
})
export class GasStationFormModule {}
