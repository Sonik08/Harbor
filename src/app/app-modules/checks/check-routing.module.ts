import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckFormComponent } from './check-form/check-form.component';
import { CheckMonthlyReportComponent } from './check-monthly-report/check-monthly-report.component';
import { CheckTableComponent } from './check-table/check-table.component';
import { CheckWeeklyReportComponent } from './check-weekly-report/check-weekly-report.component';
import { ChecksOverviewComponent } from './checks-overview/checks-overview.component';
import { ChecksBanksComponent } from './lookups/checks-banks/checks-banks.component';
import { ChecksCustomersComponent } from './lookups/checks-customers/checks-customers.component';
import { CheckTableResolver } from './resolvers/check-table.resolver';
import { CheckResolver } from './resolvers/check.resolver';

const routes: Routes = [
  {
    path: '',
    component: ChecksOverviewComponent,
    children: [
      {
        path: 'checks',
        component: CheckTableComponent,
        resolve: { data: CheckTableResolver }
      },
      {
        path: 'checks/new',
        component: CheckFormComponent,
        resolve: { data: CheckResolver }
      },
      {
        path: 'checks/:checkId/edit',
        component: CheckFormComponent,
        resolve: { data: CheckResolver }
      },
      {
        path: 'customers',
        component: ChecksCustomersComponent
      },
      {
        path: 'banks',
        component: ChecksBanksComponent
      },
      {
        path: 'weekly-reports',
        component: CheckWeeklyReportComponent
      },
      {
        path: 'monthly-reports',
        component: CheckMonthlyReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckRoutingModule {}
