import { Model } from 'src/app/core/models/model';
import { FuelType } from '../enums/fuel-type';
import { GasStation } from './gas-station';

export class Fuel extends Model {
  name: string;
  type: FuelType;

  gasStations: GasStation[] = [];
}
