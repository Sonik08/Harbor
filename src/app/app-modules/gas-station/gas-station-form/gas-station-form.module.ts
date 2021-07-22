import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/form-row/form-row.module';
import { GasStationFormComponent } from './gas-station-form.component';

@NgModule({
  declarations: [GasStationFormComponent],
  imports: [CommonModule,FormControlsModule,BaseFormModule, MatFormFieldModule, FormRowModule],
  exports: [GasStationFormComponent]
})
export class GasStationFormModule {}
