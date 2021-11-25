import { FuelType } from 'src/app/app-modules/entities/models/fuel-type';
import { Model } from 'src/app/core/models/model';

export class ShiftFuel extends Model {
  fuelType: FuelType = FuelType.Diesel;
  litres = 0;
  price = 0;

  tankName = '';
  tankId = '';
}
