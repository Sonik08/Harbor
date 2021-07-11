import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material.module';
import { MaterialListComponent } from './material-list.component';

@NgModule({
  declarations: [MaterialListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialListComponent]
})
export class MaterialListModule {}
