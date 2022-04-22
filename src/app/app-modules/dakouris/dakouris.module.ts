import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DakourisRoutingModule } from './dakouris-routing.module';
import { DakourisOverviewModule } from './dakouris-overview/dakouris-overview.module';
import { DakourisPurchasesTableModule } from './dakouris-purchases/dakouris-purchases-table/dakouris-purchases-table.module';
import { DakourisPurchasesFormModule } from './dakouris-purchases/dakouris-purchases-form/dakouris-purchases-form.module';

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
