import { Model } from 'src/app/core/models/model';
import { FuelType } from '../enums/fuel-type';

export class Resupply extends Model {
  gasStationId = '';
  fuelType: FuelType = FuelType.Unleaded;
  amount = 0;
  shiftId: string;
}
