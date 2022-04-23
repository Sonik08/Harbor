import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { ShiftFuelFormComponent } from './shift-fuel-form.component';

@NgModule({
  declarations: [ShiftFuelFormComponent],
  imports: [
    CommonModule,
    FormControlsModule,
    BaseFormModule,
    FormRowModule,
    FlexLayoutModule,
    MatInputModule
  ],
  exports: [ShiftFuelFormComponent]
})
export class ShiftFuelFormModule {}
