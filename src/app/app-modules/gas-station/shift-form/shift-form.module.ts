import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/form-row/form-row.module';
import { ShiftFormComponent } from './shift-form.component';

@NgModule({
  declarations: [ShiftFormComponent],
  imports: [CommonModule, FormControlsModule, BaseFormModule, FormRowModule],
  exports: [ShiftFormComponent]
})
export class ShiftFormModule {}
