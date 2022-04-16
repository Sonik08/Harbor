import {
  dateOptions,
  localLanguage
} from 'src/app/core/date-helpers/date-consts';
import { Model } from 'src/app/core/models/model';
import { ShiftType } from '../enums/shift-type';
import { ShiftFuel } from './shift-fuel';

export class Shift extends Model {
  type: ShiftType = ShiftType.Morning;
  income = 0;
  date: string = new Date().toLocaleDateString(localLanguage, dateOptions);
  washes = 0;
  accesories = 0;

  // expenseItems: ExpenseItem[] = [];
  // fuelLevels: FuelLevel[] = [];
  // resupplies: Resupply[] = [];
  tanks: ShiftFuel[] = [];

  gasStationId: string = null;
  gasStationName = '';
  profit = 0;
}
