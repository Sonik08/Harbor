import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidenavModule } from '../sidenav/sidenav.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, SidenavModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
