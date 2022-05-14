import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Model } from '../models/model';
import { ModelProxy } from '../models/model-proxy';
import { ResolvedData } from '../models/resolved-data';
import { ApiService } from '../services/api.service';

export abstract class BaseFormVM<TModel extends Model, RelatedData> {
  model: TModel = null;

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
          console.log(formValue);
          return this.isNew()
            ? this.apiService.post(formValue)
            : this.apiService.put(formValue);
        })
      )
      .subscribe();
    return;
  }

  protected abstract getModel(): Observable<TModel>;

  protected abstract isNew(): boolean;
}
