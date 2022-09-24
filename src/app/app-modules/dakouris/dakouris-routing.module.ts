import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DakourisOverviewComponent } from './dakouris-overview/dakouris-overview.component';
import { DakourisPurchasesFormComponent } from './dakouris-purchases/dakouris-purchases-form/dakouris-purchases-form.component';
import { DakourisPurchasesTableComponent } from './dakouris-purchases/dakouris-purchases-table/dakouris-purchases-table.component';
import { DakourisGasStationsComponent } from './lookups/dakouris-gas-stations/dakouris-gas-stations.component';
import { PurchaseResolver } from './resolvers/purchase.resolver';
const routes: Routes = [
  {
    path: '',
    component: DakourisOverviewComponent,
    children: [
      {
        path: 'purchases',
        component: DakourisPurchasesTableComponent
      },
      {
        path: 'purchases/new',
        component: DakourisPurchasesFormComponent,
        resolve: { data: PurchaseResolver }
      },
      {
        path: 'gas-stations',
        component: DakourisGasStationsComponent
      },
      {
        path: 'purchases/:purchaseId/edit',
        component: DakourisPurchasesFormComponent,
        resolve: { data: PurchaseResolver }
      },
      {
        path: 'weekly',
        component: DakourisPurchasesTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DakourisRoutingModule {}
