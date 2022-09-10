import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChecksBanksComponent } from './checks-banks.component';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialDialogModule } from 'src/app/core/material-dialog/material-dialog.module';

@NgModule({
  declarations: [ChecksBanksComponent],
  imports: [CommonModule, MaterialModule, MaterialDialogModule],
  exports: [ChecksBanksComponent]
})
export class ChecksBanksModule {}
