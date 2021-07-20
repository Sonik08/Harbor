import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumComponent } from './enum.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [EnumComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class EnumModule { }
