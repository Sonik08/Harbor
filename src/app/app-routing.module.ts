import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './base-modules/layout/layout.component';
import { SidenavComponent } from './base-modules/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: 'index.html',
    component: LayoutComponent,
    loadChildren: () => import('./base-modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: 'gas-stations',
        loadChildren: () => import('./modules/gas-station/gas-station.module').then(m => m.GasStationModule)
      },
      {
        path: '',
        loadChildren: () => import('./base-modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
