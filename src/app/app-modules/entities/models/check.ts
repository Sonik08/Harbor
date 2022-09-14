import {
  dateOptions,
  localLanguage
} from 'src/app/core/date-helpers/date-consts';
import { LookupModel } from 'src/app/core/models/lookup-model';
import { Model } from 'src/app/core/models/model';

export class Check extends Model {
  checkNumber: string = '';
  bankId: number = 0;
  fromCustomerId: number = 0;
  dateOfDispatch = new Date().toLocaleDateString(localLanguage, dateOptions);
  expirationDate = new Date().toLocaleDateString(localLanguage, dateOptions);
  amount = 0;
  toCustomerId: number = 0;
  description = '';
  sealedAt = new Date().toLocaleDateString(localLanguage, dateOptions);
  returnedFromAlek: boolean = false;
  isVoided: boolean = false;

  bank: LookupModel;
  fromCustomer: LookupModel;
  toCustomer: LookupModel;
}
