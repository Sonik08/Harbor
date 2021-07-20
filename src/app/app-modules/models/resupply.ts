import { Model } from "src/app/core/models/model";
import { FuelType } from "./fuel-type";

export class Resupply extends Model {
    fuelType: FuelType = FuelType.Unknown;
    amount: number = 0;
    shiftId: string;
}