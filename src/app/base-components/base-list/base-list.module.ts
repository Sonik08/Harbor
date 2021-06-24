import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseListComponent } from './base-list.component';
import { MaterialModule } from 'src/app/base-modules/material.module';



@NgModule({
  declarations: [BaseListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class BaseListModule { }
