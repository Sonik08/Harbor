import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialDialogComponent } from './material-dialog.component';
@NgModule({
  declarations: [MaterialDialogComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: []
})
export class MaterialDialogModule {}
