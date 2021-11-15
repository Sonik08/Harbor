import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateComponent } from './date.component';

@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports: [DateComponent],
  providers: [MatDatepickerModule]
})
export class DateModule {}
