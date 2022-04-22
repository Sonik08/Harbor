import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DakourisPurchasesFormComponent } from './dakouris-purchases-form.component';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';

@NgModule({
  declarations: [DakourisPurchasesFormComponent],
  imports: [CommonModule, FormControlsModule, BaseFormModule, FormRowModule],
  exports: [DakourisPurchasesFormComponent]
})
export class DakourisPurchasesFormModule {}
