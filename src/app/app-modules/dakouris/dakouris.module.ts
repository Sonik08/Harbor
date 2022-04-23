import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DakourisOverviewModule } from './dakouris-overview/dakouris-overview.module';
import { DakourisPurchasesFormModule } from './dakouris-purchases/dakouris-purchases-form/dakouris-purchases-form.module';
import { DakourisPurchasesTableModule } from './dakouris-purchases/dakouris-purchases-table/dakouris-purchases-table.module';
import { DakourisRoutingModule } from './dakouris-routing.module';

@NgModule({
  declarations: [],
  imports: [
    DakourisRoutingModule,
    DakourisOverviewModule,
    CommonModule,
    DakourisPurchasesTableModule,
    DakourisPurchasesFormModule
  ]
})
export class DakourisModule {}
