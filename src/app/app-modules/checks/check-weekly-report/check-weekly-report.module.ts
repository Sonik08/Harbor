import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckWeeklyReportComponent } from './check-weekly-report.component';
import { MaterialModule } from 'src/app/pages/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';

@NgModule({
  declarations: [CheckWeeklyReportComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FormRowModule,
    ReactiveFormsModule,
    MaterialTableModule
  ],
  exports: [CheckWeeklyReportComponent]
})
export class CheckWeeklyReportModule {}
