import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DakourisOverviewComponent } from './dakouris-overview.component';
import { RouterModule } from '@angular/router';
import { MaterialCardModule } from 'src/app/core/material-card/material-card.module';
import { MeterialExpantionPanelModule } from 'src/app/core/material-expantion-panel/meterial-expantion-panel.module';
import { MaterialListModule } from 'src/app/core/material-list/material-list.module';

@NgModule({
  declarations: [DakourisOverviewComponent],
  imports: [
    CommonModule,
    MaterialListModule,
    MaterialCardModule,
    RouterModule,
    MeterialExpantionPanelModule
  ],
  exports: [DakourisOverviewComponent]
})
export class DakourisOverviewModule {}
