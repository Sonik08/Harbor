import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DakourisFuelsComponent } from './dakouris-fuels/dakouris-fuel-lookup/dakouris-fuels.component';
import { DakourisOverviewComponent } from './dakouris-overview/dakouris-overview.component';
import { DakourisGasStationsComponent } from './lookups/dakouris-gas-stations/dakouris-gas-stations.component';

const routes: Routes = [
  {
    path: '',
    component: DakourisOverviewComponent,
    children: [
      {
        path: 'gas-stations',
        component: DakourisGasStationsComponent
      },
      {
        path: 'fuels',
        component: DakourisFuelsComponent
      }
      // {
      //   path: 'purchases',
      //   component: DakourisPurchasesTableComponent
      // },
      // {
      //   path: 'purchases/new',
      //   component: DakourisPurchasesFormComponent,
      //   resolve: { data: PurchaseResolver }
      // },
      // {
      //   path: 'purchases/:purchaseId/edit',
      //   component: DakourisPurchasesFormComponent,
      //   resolve: { data: PurchaseResolver }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DakourisRoutingModule {}
