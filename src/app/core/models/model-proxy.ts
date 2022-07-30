import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Model } from './model';

// Why?
// Any new additions to model should create corresponding controls in the form

// How?
// Handle the transition between the changes in the model to the form controls

export class ModelProxy<TModel extends Model> {
  form$: Observable<FormGroup>;

  constructor($form: Observable<FormGroup>) {
    this.form$ = $form;
  }

  public addControls(model: TModel): Observable<FormGroup> {
    return this.form$.pipe(
      map(form => this.addFormControllsFromModel(model, form))
    );
  }

  public addObjectToModelsArray(object: TModel, property: string) {
    this.form$.pipe(
      map(formGroup => {
        const modelsArray = formGroup.get(property) as FormArray;
        this.addNewFormGroupToFormArray(object, modelsArray);
      })
    );
  }

  public patchFormValues(model) {
    return this.form$.pipe(
      map(form => {
        for (const property in model) {
          if (model[property] instanceof Array) {
            this.patchValuesForArray(
              model,
              form.controls[property] as FormArray
            );
          } else {
            this.patchProperty(form, property, model);
          }
        }
      })
    );
  }

  private addFormControllsFromModel(model: TModel, form: FormGroup): FormGroup {
    for (const property in model) {
      if (model[property] instanceof Array) {
        this.addControlsFromModelsArray(model, property, form);
      } else {
        this.addControlFromModelsProperty(model, property, form);
      }
    }

    return form;
  }

  private addControlsFromModelsArray(
    model: TModel,
    property: Extract<keyof TModel, string>,
    form: FormGroup
  ) {
    const childFormArray = new FormArray([]);
    const arrayObjects = getObjectsFromArray();

    for (const child of arrayObjects) {
      this.addNewFormGroupToFormArray(child, childFormArray);
    }
    form.addControl(property, childFormArray);

    function getObjectsFromArray() {
      return Object.keys(model[property]).map(index => {
        return model[property][index];
      });
    }
  }

  private addNewFormGroupToFormArray(child: TModel, childFormArray: FormArray) {
    const childFormGroup = new FormGroup({});
    for (const childProperty in child) {
      this.addControlFromModelsProperty(child, childProperty, childFormGroup);
    }
    childFormArray.push(childFormGroup);
  }

  private addControlFromModelsProperty(
    model: TModel,
    property: string,
    form: FormGroup
  ) {
    const control = new FormControl(model[property]);
    form.addControl(property, control);
  }

  private patchValuesForArray(arrayOfObjects: TModel[], formArray: FormArray) {
    for (const child of arrayOfObjects) {
      let correspondingFormGroup;

      for (let i = 0; i < formArray.length; i++) {
        const formGroup = formArray.at(i) as FormGroup;
        if (formGroup.controls['id'].value === child.id) {
          correspondingFormGroup = formGroup;
          break;
        }
      }

      for (const childProperty in child) {
        this.patchProperty(correspondingFormGroup, childProperty, child);
      }
    }
  }

  private patchProperty(form: FormGroup, property: string, model: any) {
    form.controls[property].patchValue(model[property]);
  }
}
