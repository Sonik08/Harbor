import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialCardComponent } from './material-card.component';

@NgModule({
  declarations: [MaterialCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialCardComponent]
})
export class MaterialCardModule {}
