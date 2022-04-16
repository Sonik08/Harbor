import { NgModule } from '@angular/core';
import { TankLevelFormModule } from './tank-level-form/tank-level-form.module';
import { TankLevelRoutingModule } from './tank-level-routing.module';
import { TankLevelTableModule } from './tank-level-table/tank-level-table.module';

@NgModule({
  declarations: [],
  imports: [TankLevelRoutingModule, TankLevelTableModule, TankLevelFormModule]
})
export class TankLevelModule {}
