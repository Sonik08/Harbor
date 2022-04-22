import { Model } from 'src/app/core/models/model';
import { FuelType } from '../enums/fuel-type';

export class GasStationFuelPurchases extends Model {
  purchaseId = '';

  fuelType: FuelType = FuelType.Unleaded;
  amountInNaturalTemperature = 0;
  conversionFactor = 0;
  amountIn15 = 0;
  temeprature = 0;
  costPerUnit = 0;
  valueBeforeDiscount = 0;
  discount = 0;
  valueAfterDiscount = this.valueBeforeDiscount - this.discount;
  VAT = 0.24;
}
