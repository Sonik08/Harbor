import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialTableComponent } from './material-table.component';

@NgModule({
  declarations: [MaterialTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialTableComponent]
})
export class MaterialTableModule {}
