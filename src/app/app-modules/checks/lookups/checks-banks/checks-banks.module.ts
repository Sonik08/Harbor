import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LookupModule } from 'src/app/core/lookup/lookup.module';
import { ChecksBanksComponent } from './checks-banks.component';

@NgModule({
  declarations: [ChecksBanksComponent],
  imports: [CommonModule, LookupModule],
  exports: [ChecksBanksComponent]
})
export class ChecksBanksModule {}
