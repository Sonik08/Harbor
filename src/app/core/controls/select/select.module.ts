import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatOptionModule
  ],
  exports: [SelectComponent]
})
export class SelectModule {}
