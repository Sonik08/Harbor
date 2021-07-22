import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseFormComponent } from './base-form.component';
import { MaterialModule } from 'src/app/pages/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [BaseFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [BaseFormComponent]
})
export class BaseFormModule { }
