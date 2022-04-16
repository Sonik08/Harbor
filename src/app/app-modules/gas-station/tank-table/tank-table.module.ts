import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TankTableComponent } from './tank-table.component';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';

@NgModule({
  declarations: [TankTableComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [TankTableComponent]
})
export class TankTableModule {}
