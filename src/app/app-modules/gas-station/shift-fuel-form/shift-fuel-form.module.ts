import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { ShiftFuelFormComponent } from './shift-fuel-form.component';

@NgModule({
  declarations: [ShiftFuelFormComponent],
  imports: [CommonModule, FormControlsModule, BaseFormModule],
  exports: [ShiftFuelFormComponent]
})
export class ShiftFuelFormModule {}
