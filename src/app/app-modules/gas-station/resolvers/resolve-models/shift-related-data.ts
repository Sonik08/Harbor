import { ShiftType } from 'src/app/app-modules/entities/enums/shift-type';
import { Tank } from 'src/app/app-modules/entities/models/tank';

export class ShiftRelatedData {
  // expenseItems: Observable<ExpenseItem[]>;
  // fuelLevels: Observable<FuelLevel[]>;
  // reseupplies: Observable<Resupply[]>;
  tanks: Tank[];
  types: ShiftType[];
}
