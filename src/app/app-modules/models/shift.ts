import { Model } from "src/app/core/models/model";
import { ExpenseItem } from "./expense-item";
import { FuelLevel } from "./fuel-level";
import { Resupply } from "./resupply";
import { ShiftType } from "./shift-type";

export class Shift extends Model {
    type: ShiftType = ShiftType.Morning;
    income: number = 0;
    date: string = new Date().toLocaleDateString();
    expenseItems: ExpenseItem[] = [];
    fuelLevels: FuelLevel[] = [];
    resupplies: Resupply[] = [];

    gasStationId: string = null;

    _profit: number;

    get profit(): number{
        return this.income - this.expenseItems.reduce((accumulator, current) => accumulator + current.amount, 0);
    }

    set profit(value) {
        this._profit =  this.income - this.expenseItems.reduce((accumulator, current) => accumulator + current.amount, 0);
    }
}