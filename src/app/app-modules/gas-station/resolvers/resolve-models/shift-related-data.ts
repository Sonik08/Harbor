import { ShiftType } from 'src/app/app-modules/entities/enums/shift-type';
import { Tank } from 'src/app/app-modules/entities/models/tank';

export class ShiftRelatedData {
  tanks: Tank[];
  types: ShiftType[];
}
