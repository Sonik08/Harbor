import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';
import { CheckTableComponent } from './check-table.component';

@NgModule({
  declarations: [CheckTableComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [CheckTableComponent]
})
export class CheckTableModule {}
