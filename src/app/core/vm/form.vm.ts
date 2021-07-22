import { FormControl, FormGroup } from "@angular/forms";
import { Model } from "../models/model";

export class BaseFormVM<TModel extends Model> {
    form: FormGroup = new FormGroup({});
    model: TModel;

    constructor(model: TModel){
        this.model = model;
    }

    onInit(){
        this.addControls();    
    }

    private addControls(){
        for (let property in this.model) {
          const control = new FormControl({
            value: this.model[property]
          })
          this.form.addControl(property,control);
        }
      }
}