import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/base-modules/material.module';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TableComponent]
})
export class TableModule {}
