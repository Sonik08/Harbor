import { Model } from "src/app/base-modules/models/model";
import { ExpenseItem } from "./expense-item";
import { FuelLevel } from "./fuel-level";
import { FuelType } from "./fuel-type";
import { Resupply } from "./resupply";

export class Shift extends Model {
    type: FuelType = FuelType.Unknown;
    income: number = 0;
    date: string = new Date().toLocaleDateString();
    expenseItems: ExpenseItem[] = [];
    fuelLevels: FuelLevel[] = [];
    resupplies: Resupply[] = [];

    gasStationId: string = null;


    get profit(): number{
        return this.income - this.expenseItems.reduce((accumulator, current) => accumulator + current.amount, 0);
    }
}