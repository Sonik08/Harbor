import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';



@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    DateComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "el-GR" },
  ]
})
export class DateModule { }
