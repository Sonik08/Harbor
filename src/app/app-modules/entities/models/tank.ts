import { Model } from 'src/app/core/models/model';
import { FuelType } from '../enums/fuel-type';

export class Tank extends Model {
  name: string;
  gasStationId: string;
  fuelType: FuelType;
  maxCapacity: number;
  currentAmount: number;
}
