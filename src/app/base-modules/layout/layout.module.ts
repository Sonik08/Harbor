import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidenavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, SidenavModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
