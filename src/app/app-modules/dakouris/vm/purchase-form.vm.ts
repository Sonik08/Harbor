import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MockService } from 'src/app/core/services/mock-service';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { Purchase } from '../../entities/models/Purchase';
import { PurchaseRelatedData } from '../resolvers/resolved-data/purchase-related-data';
import { PurchaseApiService } from '../services/purchase-api.service';

@Injectable()
export class PurchaseVM extends BaseFormVM<
  Purchase,
  PurchaseRelatedData
> {
    
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: PurchaseApiService,
  ) {
    super(_activatedRoute, _apiService);
  }

  onInit(): void {
    super.onInit();
  }

  initializeModel(): Observable<Purchase> {
    this.model = new Purchase();

    return of(new Purchase()).pipe(switchMap(model => this.model$));
  }

  isNew(): boolean {
    return !this._router.url.includes('edit');
  }
}
