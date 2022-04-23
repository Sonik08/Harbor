import { NgModule } from '@angular/core';
import { DateModule } from './date/date.module';
import { EnumModule } from './enum/enum.module';
import { InputModule } from './input/input.module';
import { LookupModule } from './lookup/lookup.module';
import { SelectModule } from './select/select.module';

@NgModule({
  imports: [InputModule, DateModule, EnumModule, LookupModule, SelectModule],
  exports: [InputModule, DateModule, EnumModule, LookupModule, SelectModule],
  declarations: [],
  providers: []
})
export class FormControlsModule {}
