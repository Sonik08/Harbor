import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasePartialFormComponent } from './base-partial-form.component';

@NgModule({
  declarations: [BasePartialFormComponent],
  imports: [CommonModule],
  exports: [BasePartialFormComponent]
})
export class BasePartialFormModule {}
