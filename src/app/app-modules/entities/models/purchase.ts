import {
  dateOptions,
  localLanguage
} from 'src/app/core/date-helpers/date-consts';
import { Model } from 'src/app/core/models/model';
import { GasStationFuelPurchases } from './gas-station-fuel-purchase';

export class Purchase extends Model {
  gasStationId = '';
  gasStationFuelPurchases: GasStationFuelPurchases[] = [];

  date: string = new Date().toLocaleDateString(localLanguage, dateOptions);
  loadingExpenses = 0;
  totalPriceBeforeDiscounts = 0;
  totalPriceAfterDiscounts = 0;
  totalPriceBeforeVAT = 0;
  vat = 0;
  totalPriceAfterVAT = 0;

  wayOfPayment = '';
  dateOfPayment = new Date().toLocaleDateString(localLanguage, dateOptions);
}
