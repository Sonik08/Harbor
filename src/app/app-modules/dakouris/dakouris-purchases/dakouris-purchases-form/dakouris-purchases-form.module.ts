import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseFormModule } from 'src/app/core/base-form/base-form.module';
import { FormControlsModule } from 'src/app/core/controls/form-controls.module';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { DakourisPurchasesFormComponent } from './dakouris-purchases-form.component';

@NgModule({
  declarations: [DakourisPurchasesFormComponent],
  imports: [
    CommonModule,
    FormControlsModule,
    BaseFormModule,
    FormRowModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [DakourisPurchasesFormComponent]
})
export class DakourisPurchasesFormModule {}
