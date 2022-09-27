import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialDialogModule } from '../material-dialog/material-dialog.module';
import { MaterialLookupComponent } from './material-lookup.component';

@NgModule({
  declarations: [MaterialLookupComponent],
  imports: [CommonModule, MaterialModule, MaterialDialogModule],
  exports: [MaterialLookupComponent]
})
export class MaterialLookupModule {}
