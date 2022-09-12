import { NgModule } from '@angular/core';
import { CheckBoxModule } from './check-box-control/check-box-control.module';
import { DateModule } from './date/date.module';
import { EnumModule } from './enum/enum.module';
import { InputModule } from './input/input.module';
import { LookupModule } from './lookup/lookup.module';
import { SelectModule } from './select/select.module';

@NgModule({
  imports: [
    InputModule,
    DateModule,
    EnumModule,
    LookupModule,
    SelectModule,
    CheckBoxModule
  ],
  exports: [
    InputModule,
    DateModule,
    EnumModule,
    LookupModule,
    SelectModule,
    CheckBoxModule
  ],
  declarations: [],
  providers: []
})
export class FormControlsModule {}
