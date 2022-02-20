import { NgModule } from '@angular/core';
import { CheckFormModule } from './check-form/check-form.module';
import { CheckRoutingModule } from './check-routing.module';
import { CheckTableModule } from './check-table/check-table.module';

@NgModule({
  declarations: [],
  imports: [CheckRoutingModule, CheckTableModule, CheckFormModule]
})
export class CheckModule {}
