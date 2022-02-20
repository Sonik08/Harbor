import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckFormComponent } from './check-form.component';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';

@NgModule({
  declarations: [CheckFormComponent],
  imports: [CommonModule, FormControlsModule, BaseFormModule, FormRowModule],
  exports: [CheckFormComponent]
})
export class CheckFormModule {}
