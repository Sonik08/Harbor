import { Model } from "src/app/core/models/model";
import { FuelType } from "./fuel-type";

export class FuelLevel extends Model {
    fuelType: FuelType;
    level: number;
    shiftId: string;
}