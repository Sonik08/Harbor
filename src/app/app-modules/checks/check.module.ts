import { ChecksCustomersModule } from './lookups/checks-customers/checks-customers.module';
import { ChecksBanksModule } from './lookups/checks-banks/checks-banks.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckFormModule } from './check-form/check-form.module';
import { CheckRoutingModule } from './check-routing.module';
import { CheckTableModule } from './check-table/check-table.module';
import { ChecksOverviewModule } from './checks-overview/checks-overview.module';
import { CheckWeeklyReportModule } from './check-weekly-report/check-weekly-report.module';
import { CheckMonthlyReportModule } from './check-monthly-report/check-monthly-report.module';

@NgModule({
  declarations: [],
  imports: [
    CheckRoutingModule,
    ChecksOverviewModule,
    CommonModule,
    CheckTableModule,
    CheckFormModule,
    ChecksBanksModule,
    ChecksCustomersModule,
    CheckWeeklyReportModule,
    CheckMonthlyReportModule
  ]
})
export class CheckModule {}
