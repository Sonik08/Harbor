import { Model } from "src/app/core/models/model";
import { ExpenseType } from "./expense-type";

export class ExpenseItem extends Model {
    type: ExpenseType = ExpenseType.Unknown;
    amount: number;
    description: string;
    shiftId: string = null;
}