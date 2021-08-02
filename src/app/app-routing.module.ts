import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: 'index.html',
    component: LayoutComponent,
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: 'gas-stations',
        loadChildren: () =>
          import('./app-modules/gas-station/gas-station.module').then(
            m => m.GasStationModule
          )
      },
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
