import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormRowComponent } from './form-row.component';

@NgModule({
  declarations: [FormRowComponent],
  imports: [FlexLayoutModule, CommonModule],
  exports: [FormRowComponent]
})
export class FormRowModule {}
