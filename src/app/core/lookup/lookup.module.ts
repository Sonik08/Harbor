import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/pages/material.module';
import { LookupComponent } from './lookup.component';

@NgModule({
  declarations: [LookupComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LookupComponent]
})
export class LookupModule {}
