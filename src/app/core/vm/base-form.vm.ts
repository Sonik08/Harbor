import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Model } from '../models/model';
import { ModelProxy } from '../models/model-proxy';
import { ResolvedData } from '../models/resolved-data';
import { ApiService } from '../services/api.service';

export abstract class BaseFormVM<TModel extends Model, RelatedData> {
  model: TModel;

  form$: Observable<FormGroup> = of(new FormGroup({}));
  model$: Observable<TModel> = new Observable(observer => {
    observer.next(this.model);
  });

  modelInitialized = false;
  saveable = true;
  resolvedData: Observable<ResolvedData<TModel, RelatedData>>;
  modelProxy: ModelProxy<TModel>;

  constructor(
    public _route: ActivatedRoute,
    public _baseRouter: Router,
    public apiService: ApiService<TModel>
  ) {
    this.modelProxy = new ModelProxy<TModel>(this.form$);
  }

  onInit(): void {
    this.getModel()
      .pipe(
        switchMap(_ => this.modelProxy.addControls(this.model)),
        switchMap(_ => this.patchValuesIfEditing(this.model))
      )
      .subscribe();
  }

  private patchValuesIfEditing(model: TModel) {
    if (!this.isNew()) {
      return this.modelProxy.patchFormValues(model);
    }

    return this.model$;
  }

  submit(): void {
    this.form$
      .pipe(
        switchMap(form => {
          const formValue = form.getRawValue();
          return this.isNew()
            ? this.apiService.post(formValue)
            : this.apiService.put(formValue);
        }),
        map(response => {
          if (response.errors.length > 0) {
            // show the errors
          } else {
            this._baseRouter.navigate(['../'], { relativeTo: this._route });
          }
        })
      )
      .subscribe();
    return;
  }

  protected abstract getModel(): Observable<TModel>;

  protected isNew(): boolean {
    return !this._baseRouter.url.includes('edit');
  }
}
