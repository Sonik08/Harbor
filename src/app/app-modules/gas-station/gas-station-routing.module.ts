import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasStationListComponent } from './gas-station-list/gas-station-list.component';
import { GasStationOverviewComponent } from './gas-station-overview/gas-station-overview.component';
import { GasStationResolver } from './gas-station.resolver';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

const routes: Routes = [
  {
    path: '',
    component: GasStationListComponent
  },
  {
    path: ':id/overview',
    component: GasStationOverviewComponent,
    resolve: { data: GasStationResolver},
    children: [
      {
        path: 'shifts',
        component: ShiftListComponent
      },
      {
        path: 'shifts/:id',
        component: ShiftFormComponent
      },
      {
        path: 'shifts/new',
        component: ShiftFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasStationRoutingModule {}
