import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, single } from 'rxjs/operators';
import { Data } from 'src/app/pages/models/data';
import { Model } from '../models/model';
import { ResolvedData } from '../models/resolved-data';

export abstract class BaseFormVM<TModel extends Model, RelatedData> {
  form: FormGroup = new FormGroup({});
  model: TModel;
  model$: Observable<TModel>;
  modelInitialized = false;
  saveable = true;
  resolvedData: Observable<ResolvedData<TModel, RelatedData>>;

  constructor(private route: ActivatedRoute) {}

  onInit() {
    this.initializeModel();

    this.getInitialModelState(this.route);

    this.addControls();

    if (!this.isNew()) {
      this.updateInitialControlValues();
    }

    // this.loadRelatedData();
  }

  submit(): void {
    this.form.getRawValue();
  }

  // protected abstract loadRelatedData(): void;

  protected abstract initializeModel(): void;

  protected abstract isNew(): boolean;

  protected updateInitialControlValues(): void {
    this.route.data
      .pipe(
        map(resolvedData => {
          const model = resolvedData.data;
          for (const property in model) {
            this.form.controls[property].patchValue(model[property]);
          }
          console.log(this.form);
        })
      )
      .subscribe();
  }

  private getInitialModelState(route: ActivatedRoute) {
    this.model$ = (route.data as Observable<Data<TModel>>).pipe(
      map(resolvedData => resolvedData.data),
      single()
    );
  }

  private addControls(): void {
    for (const property in this.model) {
      const control = new FormControl(this.model[property]);
      this.form.addControl(property, control);
    }
  }
}
