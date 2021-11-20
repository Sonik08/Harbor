import { TankType } from 'src/app/app-modules/entities/enums/tank-type';
import { Model } from 'src/app/core/models/model';

export class Tank extends Model {
  name: string;
  gasStationId: string;
  tankType: TankType;
}
