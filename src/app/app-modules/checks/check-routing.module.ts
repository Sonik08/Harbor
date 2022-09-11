import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckFormComponent } from './check-form/check-form.component';
import { CheckTableComponent } from './check-table/check-table.component';
import { ChecksOverviewComponent } from './checks-overview/checks-overview.component';
import { ChecksBanksComponent } from './lookups/checks-banks/checks-banks.component';
import { ChecksCustomersComponent } from './lookups/checks-customers/checks-customers.component';
import { CheckResolver } from './resolvers/check.resolver';

const routes: Routes = [
  {
    path: '',
    component: ChecksOverviewComponent,
    children: [
      {
        path: 'checks',
        component: CheckTableComponent
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
      }
    ]
  }
  // {
  //   path: ':gasStationId/overview',
  //   component: GasStationOverviewComponent,
  //   resolve: { data: GasStationResolver },
  //   children: [
  //     {
  //       path: 'shifts',
  //       component: ShiftListComponent
  //     },
  //     {
  //       path: 'shifts/:shiftId/edit',
  //       component: ShiftFormComponent,
  //       resolve: { data: ShiftResolver }
  //     },
  //     {
  //       path: 'shifts/new',
  //       component: ShiftFormComponent,
  //       resolve: { shifts: ShiftResolver }
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckRoutingModule {}
