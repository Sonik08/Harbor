import { Bank } from 'src/app/app-modules/entities/enums/bank-type';
import { LookupModel } from 'src/app/core/models/lookup-model';

export class CheckRelatedData {
  banks: LookupModel[];
  customers: LookupModel[];
}
