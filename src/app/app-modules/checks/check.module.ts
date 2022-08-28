import { ChecksCustomersModule } from './lookups/checks-customers/checks-customers.module';
import { ChecksBanksModule } from './lookups/checks-banks/checks-banks.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckFormModule } from './check-form/check-form.module';
import { CheckRoutingModule } from './check-routing.module';
import { CheckTableModule } from './check-table/check-table.module';
import { ChecksOverviewModule } from './checks-overview/checks-overview.module';

@NgModule({
  declarations: [],
  imports: [
    CheckRoutingModule,
    ChecksOverviewModule,
    CommonModule,
    CheckTableModule,
    CheckFormModule,
    ChecksBanksModule,
    ChecksCustomersModule
  ]
})
export class CheckModule {}
