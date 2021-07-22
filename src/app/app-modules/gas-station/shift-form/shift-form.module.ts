import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftFormComponent } from './shift-form.component';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormRowModule } from 'src/app/form-row/form-row.module';



@NgModule({
  declarations: [ShiftFormComponent],
  imports: [
    CommonModule,
    FormControlsModule,
    BaseFormModule,
    FormRowModule
  ],
  exports: [ShiftFormComponent]
})
export class ShiftFormModule { }
