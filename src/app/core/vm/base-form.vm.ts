import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, single, switchMap } from 'rxjs/operators';
import { Data } from 'src/app/pages/models/data';
import { Model } from '../models/model';
import { ResolvedData } from '../models/resolved-data';
import { ApiService } from '../services/api.service';

export abstract class BaseFormVM<TModel extends Model, RelatedData> {
  form$: Observable<FormGroup> = of(new FormGroup({}));
  model: TModel = null;
  model$: Observable<TModel> = new Observable(observer => {
    observer.next(this.model);
  });

  modelInitialized = false;
  saveable = true;
  resolvedData: Observable<ResolvedData<TModel, RelatedData>>;

  constructor(
    public _route: ActivatedRoute,
    public apiService: ApiService<TModel>
  ) {}

  onInit(): void {
    const initialModel = this.initializeModel();

    //this.getInitialModelState(this.route);

    const modelWithResolvedData = this.loadResolvedData(initialModel);

    modelWithResolvedData
      .pipe(switchMap(model => this.addControls(model)))
      .subscribe();

    if (!this.isNew()) {
      this.updateInitialControlValues();
    }
  }

  submit(): void {
      this.form$
      .pipe(
        switchMap(form => {
          const formValue = form.getRawValue();
          return this.isNew() ?  this.apiService.post(formValue) : this.apiService.put(formValue);
        })
      )
      .subscribe();
      return;
  }

  // eslint-disable-next-line prettier/prettier
  protected  loadResolvedData(
    model$: Observable<TModel>
  ): Observable<any> {
    return model$;
  }

  protected abstract initializeModel(): Observable<TModel>;

  protected abstract isNew(): boolean;

  protected updateInitialControlValues(): void {
    this._route.data.pipe(
      switchMap(data => {
        const model = data.data.model;
        return this.form$.pipe(
          map(form => {
            for (const property in model) {
              form.controls[property].patchValue(model[property]);
            }
            return form;
          })
        );
      })
    ).subscribe();
  }

  private getInitialModelState(route: ActivatedRoute) {
    this.model$ = (route.data as Observable<Data<TModel>>).pipe(
      map(resolvedData => resolvedData.data),
      single()
    );
  }

  private addControls(model): Observable<any> {
    return this.form$.pipe(
      map(form => {
        for (const property in model) {
          if (model[property] instanceof Array) {
            const childFormArray = new FormArray([]);
            const arrayObjects = Object.keys(model[property]).map(index => {
              return model[property][index];
            });
            for (const child of arrayObjects) {
              const childFormGroup = new FormGroup({});
              for (const childProperty in child) {
                childFormGroup.addControl(
                  childProperty,
                  new FormControl(child[childProperty])
                );
              }
              childFormArray.push(childFormGroup);
            }
            form.addControl(property, childFormArray);
          } else {
            const control = new FormControl(model[property]);
            form.addControl(property, control);
          }
        }
        return form;
      })
    );
  }
}
