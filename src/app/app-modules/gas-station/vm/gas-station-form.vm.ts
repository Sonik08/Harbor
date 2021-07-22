import { BaseFormVM } from "src/app/core/vm/form.vm";
import { GasStation } from "../../models/gas-station";

export class GasStationVM extends BaseFormVM<GasStation>{

    saveable: boolean = true;
    
    constructor() {
        super(new GasStation());
    }

    onInit(){
        super.onInit();
    }
}