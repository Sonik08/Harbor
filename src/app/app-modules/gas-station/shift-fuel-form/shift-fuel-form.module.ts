import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { ShiftFuelFormComponent } from './shift-fuel-form.component';

@NgModule({
  declarations: [ShiftFuelFormComponent],
  imports: [
    CommonModule,
    FormControlsModule,
    BaseFormModule,
    MatFormFieldModule
  ],
  exports: [ShiftFuelFormComponent]
})
export class ShiftFuelFormModule {}
