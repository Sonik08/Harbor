import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/base-modules/material.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SidenavComponent]
})
export class SidenavModule {}
