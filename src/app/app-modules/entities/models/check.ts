import {
  dateOptions,
  localLanguage
} from 'src/app/core/date-helpers/date-consts';
import { Model } from 'src/app/core/models/model';
import { Bank } from '../enums/bank-type';

export class Check extends Model {
  bank: Bank = Bank.Unknown;
  sentFrom = 0;
  acquzitionDate = new Date().toLocaleDateString(localLanguage, dateOptions);
  expirationDate = new Date().toLocaleDateString(localLanguage, dateOptions);
  amount = 0;
  sentTo = '';
  description = '';
  sealedAt = new Date().toLocaleDateString(localLanguage, dateOptions);
}
