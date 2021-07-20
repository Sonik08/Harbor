import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCardComponent } from './material-card.component';
import { MaterialModule } from 'src/app/pages/material.module';



@NgModule({
  declarations: [MaterialCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MaterialCardComponent]
})
export class MaterialCardModule { }
