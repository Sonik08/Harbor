import { MaterialModule } from 'src/app/base-modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent]
})
export class TableModule {}
