import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckFormComponent } from './check-form/check-form.component';
import { CheckTableComponent } from './check-table/check-table.component';
import { CheckResolver } from './resolvers/check.resolver';

const routes: Routes = [
  {
    path: 'new',
    component: CheckFormComponent
  },
  {
    path: ':checkId/edit',
    component: CheckFormComponent,
    resolve: { data: CheckResolver }
  },
  {
    path: '',
    component: CheckTableComponent
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
