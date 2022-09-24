import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckMonthlyReportComponent } from './check-monthly-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRowModule } from 'src/app/core/form-row/form-row.module';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';
import { MaterialModule } from 'src/app/pages/material.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [CheckMonthlyReportComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FormRowModule,
    ReactiveFormsModule,
    MaterialTableModule,
    MatNativeDateModule
  ],
  exports: [CheckMonthlyReportComponent]
})
export class CheckMonthlyReportModule {}
