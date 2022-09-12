import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxControlComponent } from './check-box-control.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckBoxControlComponent],
  imports: [CommonModule, MatCheckboxModule, ReactiveFormsModule],
  exports: [CheckBoxControlComponent]
})
export class CheckBoxModule {}
