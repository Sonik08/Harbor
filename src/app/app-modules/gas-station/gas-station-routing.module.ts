import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GasStationListComponent } from './gas-station-list/gas-station-list.component';
import { GasStationOverviewComponent } from './gas-station-overview/gas-station-overview.component';
import { GasStationResolver } from './gas-station.resolver';

const routes: Routes = [
  {
    path: '',
    component: GasStationListComponent
  },
  {
    path: ':id/overview',
    component: GasStationOverviewComponent,
    resolve: { data: GasStationResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasStationRoutingModule {}
