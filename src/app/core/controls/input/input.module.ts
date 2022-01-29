import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  exports: [InputComponent]
})
export class InputModule {}
