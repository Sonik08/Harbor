import { FuelType } from 'src/app/app-modules/entities/models/fuel-type';
import { Model } from 'src/app/core/models/model';

export class ShiftFuel extends Model {
  fuelType: FuelType;
  litres: number;
  price: number;
}
