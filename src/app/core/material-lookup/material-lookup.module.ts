import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialLookupComponent } from './material-lookup.component';

@NgModule({
  declarations: [MaterialLookupComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialLookupComponent]
})
export class MaterialLookupModule {}
