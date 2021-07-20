import { Model } from "src/app/base-modules/models/model";
import { ExpenseType } from "./expense-type";

export class ExpenseItem extends Model {
    type: ExpenseType = ExpenseType.Unknown;
    amount: number;
    shiftId: string = null;
}