import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TankLevelFormComponent } from './tank-level-form.component';

@NgModule({
  declarations: [TankLevelFormComponent],
  imports: [CommonModule],
  exports: [TankLevelFormComponent]
})
export class TankLevelFormModule {}
