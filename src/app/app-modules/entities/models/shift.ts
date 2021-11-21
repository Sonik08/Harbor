import { Model } from 'src/app/core/models/model';
import { ShiftType } from '../enums/shift-type';
import { ShiftFuel } from './shift-fuel';

export class Shift extends Model {
  type: ShiftType = ShiftType.Morning;
  income = 0;
  date: string = new Date().toLocaleDateString();
  washes = 0;
  accesories = 0;

  // expenseItems: ExpenseItem[] = [];
  // fuelLevels: FuelLevel[] = [];
  // resupplies: Resupply[] = [];
  fuelConsumption: ShiftFuel[] = [];

  gasStationId: string = null;

  _profit: number;

  //get profit(): number {
  // return (
  //   this.income -
  //   this.expenseItems.reduce(
  //     (accumulator, current) => accumulator + current.amount,
  //     0
  //   )
  // );
  //}

  // set profit(value) {
  //   this._profit =
  //     this.income -
  //     this.expenseItems.reduce(
  //       (accumulator, current) => accumulator + current.amount,
  //       0
  //     );
  // }
}
