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
  model: TModel;
  model$: Observable<TModel> = of(null);
  modelInitialized = false;
  saveable = true;
  resolvedData: Observable<ResolvedData<TModel, RelatedData>>;

  constructor(
    public route: ActivatedRoute,
    public apiService: ApiService<TModel>
  ) {}

  onInit(): void {
    this.initializeModel();

    //this.getInitialModelState(this.route);

    // I should return an observable and afterwards to proper handling for a single subscribe
    // Hot vs cold observables
    // what should happen here is that  model$ get it's values from model making it give the same value to all the subscribers
    const modelWithResolvedData = this.loadResolvedData();

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
          return this.apiService.post(formValue);
        })
      )
      .subscribe();
  }

  protected abstract loadResolvedData(): Observable<any>;

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
            return form;
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
        console.log(form);
        return form;
      })
    );
    // return this.model$.pipe(
    //   switchMap(model => {
    //     return this.form$.pipe(
    //       map(form => {
    //         for (const property in model) {
    //           if (model[property] instanceof Array) {
    //             const childFormArray = new FormArray([]);
    //             const arrayObjects = Object.keys(model[property]).map(index => {
    //               return model[property][index];
    //             });
    //             for (const child of arrayObjects) {
    //               const childFormGroup = new FormGroup({});
    //               for (const childProperty in child) {
    //                 childFormGroup.addControl(
    //                   childProperty,
    //                   new FormControl(child[childProperty])
    //                 );
    //               }
    //               childFormArray.push(childFormGroup);
    //             }
    //             form.addControl(property, childFormArray);
    //           } else {
    //             const control = new FormControl(model[property]);
    //             form.addControl(property, control);
    //           }
    //         }
    //         console.log(form);
    //         return form;
    //       })
    //     );
    //   }),
    //   single()
    // );
  }
}
