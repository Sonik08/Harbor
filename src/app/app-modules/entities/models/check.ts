import {
  dateOptions,
  localLanguage
} from 'src/app/core/date-helpers/date-consts';
import { Model } from 'src/app/core/models/model';
import { Bank } from '../enums/bank-type';

export class Check extends Model {
  bank: Bank = Bank.Unknown;
  sentFrom = '';
  acquzitionDate = new Date().toLocaleDateString(localLanguage, dateOptions);
  expirationDate = new Date().toLocaleDateString(localLanguage, dateOptions);
  checkNumber = '';
  amount = 0;
  sentTo = '';
  sentWhen = new Date().toLocaleDateString(localLanguage, dateOptions);
}
