import { MaterialTableModule } from './../../../../core/material-table/material-table.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialLookupModule } from 'src/app/core/material-lookup/material-lookup.module';
import { ChecksBanksComponent } from './checks-banks.component';

@NgModule({
  declarations: [ChecksBanksComponent],
  imports: [CommonModule, MaterialLookupModule, MaterialTableModule],
  exports: [ChecksBanksComponent]
})
export class ChecksBanksModule {}
