import { Observable } from "rxjs";
import { ExpenseItem } from "src/app/app-modules/models/expense-item";
import { FuelLevel } from "src/app/app-modules/models/fuel-level";
import { Resupply } from "src/app/app-modules/models/resupply";
import { ShiftType } from "src/app/app-modules/models/shift-type";

export class ShiftRelatedData {
    // expenseItems: Observable<ExpenseItem[]>;
    // fuelLevels: Observable<FuelLevel[]>;
    // reseupplies: Observable<Resupply[]>;

    types: ShiftType[]
}