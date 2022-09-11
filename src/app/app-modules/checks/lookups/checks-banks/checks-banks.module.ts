import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChecksBanksComponent } from './checks-banks.component';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialDialogModule } from 'src/app/core/material-dialog/material-dialog.module';
import { MaterialLookupModule } from 'src/app/core/material-lookup/material-lookup.module';

@NgModule({
  declarations: [ChecksBanksComponent],
  imports: [CommonModule, MaterialLookupModule],
  exports: [ChecksBanksComponent]
})
export class ChecksBanksModule {}
