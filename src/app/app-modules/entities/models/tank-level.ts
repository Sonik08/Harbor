import { Model } from 'src/app/core/models/model';

export class TankLevel extends Model {
  incoming = 0;
  outgoing = 0;
  description = '';
  currentLevel = 0;

  tankId: string = null;
}
