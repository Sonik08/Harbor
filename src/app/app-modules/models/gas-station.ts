import { Model } from './../../base-modules/models/model';
import { Shift } from './shift';
export class GasStation extends Model {
  name = null;
  adress: string = null;
  shifts: Shift[] = [];
}
