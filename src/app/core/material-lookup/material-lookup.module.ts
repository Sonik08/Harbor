import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';
import { MaterialDialogModule } from '../material-dialog/material-dialog.module';
import { MaterialLookupComponent } from './material-lookup.component';

@NgModule({
  declarations: [MaterialLookupComponent],
  imports: [CommonModule, MaterialModule, MaterialDialogModule],
  exports: [MaterialLookupComponent]
})
export class MaterialLookupModule {}
