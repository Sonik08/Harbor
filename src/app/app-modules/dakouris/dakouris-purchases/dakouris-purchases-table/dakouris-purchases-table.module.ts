import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DakourisPurchasesTableComponent } from './dakouris-purchases-table.component';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';

@NgModule({
  declarations: [DakourisPurchasesTableComponent],
  imports: [CommonModule, MaterialTableModule],
  exports: [DakourisPurchasesTableComponent]
})
export class DakourisPurchasesTableModule {}
