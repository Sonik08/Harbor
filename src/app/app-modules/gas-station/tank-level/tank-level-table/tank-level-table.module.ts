import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TankLevelTableComponent } from './tank-level-table.component';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';

@NgModule({
  declarations: [TankLevelTableComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [TankLevelTableComponent]
})
export class TankLevelTableModule {}
