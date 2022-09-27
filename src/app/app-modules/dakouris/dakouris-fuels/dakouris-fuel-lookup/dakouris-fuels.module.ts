import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DakourisFuelsComponent } from './dakouris-fuels.component';
import { MaterialLookupModule } from 'src/app/core/material-lookup/material-lookup.module';
import { DakourisFuelDialogComponent } from '../dakouris-fuel-dialog/dakouris-fuel-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/pages/material.module';
import { MaterialTableModule } from 'src/app/core/material-table/material-table.module';

@NgModule({
  declarations: [DakourisFuelsComponent, DakourisFuelDialogComponent],
  imports: [
    CommonModule,
    MaterialLookupModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialTableModule
  ],
  exports: [DakourisFuelsComponent, DakourisFuelDialogComponent]
})
export class DakourisFuelsModule {}
