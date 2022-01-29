import { FuelType } from 'src/app/app-modules/entities/models/fuel-type';
import { Model } from 'src/app/core/models/model';

export class ShiftFuel extends Model {
  constructor(tankId: string, tankName: string, tankFuelType: FuelType) {
    super();
    this.fuelType = tankFuelType;
    this.tankName = tankName;
    this.tankId = tankId;
  }

  fuelType: FuelType = FuelType.Diesel;
  litres = 0;
  price = 0;
  total = 0;

  tankName = '';
  tankId = '';
}
