import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LookupModule } from 'src/app/core/lookup/lookup.module';
import { ChecksCustomersComponent } from './checks-customers.component';

@NgModule({
  declarations: [ChecksCustomersComponent],
  imports: [CommonModule, LookupModule],
  exports: [ChecksCustomersComponent]
})
export class ChecksCustomersModule {}
