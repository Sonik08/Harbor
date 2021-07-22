import { NgModule } from '@angular/core';
import { DateModule } from './date/date.module';
import { EnumModule } from './enum/enum.module';
import { InputModule } from './input/input.module';
import { LookupModule } from './lookup/lookup.module';

@NgModule({
    imports: [InputModule, DateModule, EnumModule, LookupModule],
    exports: [InputModule, DateModule, EnumModule, LookupModule],
    declarations: [],
    providers: [],
})
export class FormControlsModule { }
