import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateComponent } from './date.component';

@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [DateComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'el-GR' }]
})
export class DateModule {}
