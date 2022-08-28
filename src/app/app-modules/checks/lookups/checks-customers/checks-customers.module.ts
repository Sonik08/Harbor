import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialLookupModule } from 'src/app/core/material-lookup/material-lookup.module';
import { ChecksCustomersComponent } from './checks-customers.component';

@NgModule({
  declarations: [ChecksCustomersComponent],
  imports: [CommonModule, MaterialLookupModule],
  exports: [ChecksCustomersComponent]
})
export class ChecksCustomersModule {}
