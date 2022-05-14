import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MockService } from 'src/app/core/services/mock-service';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { Bank } from '../../entities/enums/bank-type';
import { Check } from '../../entities/models/check';
import { CheckRelatedData } from '../resolvers/resolved-data/check-related-data';
import { CheckApiService } from '../services/check-api.service';

@Injectable()
export class CheckVM extends BaseFormVM<Check, CheckRelatedData> {
  banks$: Observable<Bank[]> = of([]);

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: CheckApiService,
    private _mockService: MockService
  ) {
    super(_activatedRoute, _apiService);
  }

  onInit(): void {
    this.banks$ = this._mockService.getBankTypes();
    super.onInit();
  }

  getModel(): Observable<Check> {
    // this.model = new Check();
    this.model = new Check();
    return this.model$;
  }

  isNew(): boolean {
    return !this._router.url.includes('edit');
  }
}
