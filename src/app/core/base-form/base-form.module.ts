import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/pages/material.module';
import { BaseFormComponent } from './base-form.component';

@NgModule({
  declarations: [BaseFormComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [BaseFormComponent]
})
export class BaseFormModule {}
