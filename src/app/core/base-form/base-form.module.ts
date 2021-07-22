import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form.component';
import { MaterialModule } from 'src/app/pages/material.module';



@NgModule({
  declarations: [BaseFormComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [BaseFormComponent]
})
export class BaseFormModule { }
