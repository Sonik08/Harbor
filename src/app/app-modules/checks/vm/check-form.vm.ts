import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { Check } from '../../entities/models/check';
import { CheckRelatedData } from '../resolvers/resolved-data/check-related-data';
import { CheckApiService } from '../services/check-api.service';

@Injectable()
export class CheckVM extends BaseFormVM<Check, CheckRelatedData> {
  banks$: Observable<string[]> = of([]);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: CheckApiService
  ) {
    super(_activatedRoute, _router, _apiService);
  }

  onInit(): void {
    this.model = new Check();

    super.onInit();
  }

  getModel(): Observable<Check> {
    return this._route.data.pipe(
      tap(response => (this.banks$ = of(response.data.relatedData.banks))),
      map(response => this.initializeCheck(response))
    );
  }

  private initializeCheck(response) {
    console.log(response);
    console.log(response.data.model);
    let check = response.data.model;

    this.model = check;
    return this.model;
  }
}
