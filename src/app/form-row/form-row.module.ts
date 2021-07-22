import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRowComponent } from './form-row.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [FormRowComponent],
  imports: [
    FlexLayoutModule,
    CommonModule
  ],
  exports: [FormRowComponent]
})
export class FormRowModule { }
