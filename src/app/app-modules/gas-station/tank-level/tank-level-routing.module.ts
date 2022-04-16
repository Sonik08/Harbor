import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TankLevelFormComponent } from './tank-level-form/tank-level-form.component';
import { TankLevelTableComponent } from './tank-level-table/tank-level-table.component';
import { TankLevelResolver } from './resolvers/tank-level.resolver';

const routes: Routes = [
  {
    path: 'new',
    component: TankLevelFormComponent
  },
  {
    path: ':tank-levelId/edit',
    component: TankLevelFormComponent,
    resolve: { data: TankLevelResolver }
  },
  {
    path: '',
    component: TankLevelTableComponent
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
export class TankLevelRoutingModule {}
