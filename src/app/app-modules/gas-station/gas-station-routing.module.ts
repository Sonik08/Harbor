import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasStationFormComponent } from './gas-station-form/gas-station-form.component';
import { GasStationTableComponent } from './gas-station-table/gas-station-table.component';
import { GasStationOverviewComponent } from './gas-station-overview/gas-station-overview.component';
import { GasStationResolver } from './resolvers/gas-station.resolver';
import { ShiftResolver } from './resolvers/shift.resolver';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

const routes: Routes = [
  {
    path: 'new',
    component: GasStationFormComponent
  },
  {
    path: ':gasStationId/edit',
    component: GasStationFormComponent,
    resolve: { data: GasStationResolver }
  },
  {
    path: '',
    component: GasStationTableComponent
  },
  {
    path: ':gasStationId/overview',
    component: GasStationOverviewComponent,
    resolve: { data: GasStationResolver },
    children: [
      {
        path: 'shifts',
        component: ShiftListComponent
      },
      {
        path: 'shifts/:shiftId/edit',
        component: ShiftFormComponent,
        resolve: { data: ShiftResolver }
      },
      {
        path: 'shifts/new',
        component: ShiftFormComponent,
        resolve: { data: ShiftResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasStationRoutingModule {}
