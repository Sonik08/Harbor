import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, single, switchMap } from 'rxjs/operators';
import { Data } from 'src/app/pages/models/data';
import { Model } from '../models/model';
import { ResolvedData } from '../models/resolved-data';

export abstract class BaseFormVM<TModel extends Model, RelatedData> {
  form$: Observable<FormGroup> = of(new FormGroup({}));
  model: TModel;
  model$: Observable<TModel> = of(null);
  modelInitialized = false;
  saveable = true;
  resolvedData: Observable<ResolvedData<TModel, RelatedData>>;

  constructor(public route: ActivatedRoute) {}

  onInit(): void {
    this.initializeModel();

    //this.getInitialModelState(this.route);

    this.loadResolvedData();

    this.addControls();

    if (!this.isNew()) {
      this.updateInitialControlValues();
    }
  }

  submit(): void {
    // this.form.getRawValue();
  }

  protected abstract loadResolvedData(): void;

  protected abstract initializeModel(): void;

  protected abstract isNew(): boolean;

  protected updateInitialControlValues(): void {
    this.route.data.pipe(
      switchMap(model => {
        return this.form$.pipe(
          map(form => {
            for (const property in model) {
              form.controls[property].patchValue(model[property]);
            }
          })
        );
      })
    );
  }

  private getInitialModelState(route: ActivatedRoute) {
    this.model$ = (route.data as Observable<Data<TModel>>).pipe(
      map(resolvedData => resolvedData.data),
      single()
    );
  }

  private addControls(): void {
    this.model$
      .pipe(
        switchMap(model => {
          return this.form$.pipe(
            map(form => {
              for (const property in model) {
                const control = new FormControl(model[property]);
                form.addControl(property, control);
              }
              return form;
            })
          );
        }),
        single()
      )
      .subscribe();
  }
}
