import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialCardModule } from 'src/app/core/material-card/material-card.module';
import { MeterialExpantionPanelModule } from 'src/app/core/material-expantion-panel/meterial-expantion-panel.module';
import { MaterialListModule } from 'src/app/core/material-list/material-list.module';
import { ChecksOverviewComponent } from './checks-overview.component';

@NgModule({
  declarations: [ChecksOverviewComponent],
  imports: [
    CommonModule,
    MaterialListModule,
    MaterialCardModule,
    RouterModule,
    MeterialExpantionPanelModule
  ],
  exports: [ChecksOverviewComponent]
})
export class ChecksOverviewModule {}
