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
      // {
      //   path: 'gas-stations',
      //   loadChildren: () =>
      //     import('./app-modules/gas-station/gas-station.module').then(
      //       m => m.GasStationModule
      //     )
      // },
      {
        path: 'checks',
        loadChildren: () =>
          import('./app-modules/checks/check.module').then(m => m.CheckModule)
      },
      {
        path: 'dakouris',
        loadChildren: () =>
          import('./app-modules/dakouris/dakouris.module').then(
            m => m.DakourisModule
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
