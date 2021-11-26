import { Model } from 'src/app/core/models/model';
import { FuelType } from './fuel-type';

export class Tank extends Model {
  name: string;
  gasStationId: string;
  fuelType: FuelType;
  maxLitres: number;
}
