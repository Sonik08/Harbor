import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';
import { ShiftListComponent } from './shift-list.component';

@NgModule({
  declarations: [ShiftListComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [ShiftListComponent]
})
export class ShiftListModule {}
