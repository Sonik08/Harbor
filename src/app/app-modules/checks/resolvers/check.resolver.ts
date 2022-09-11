import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { LookupModel } from 'src/app/core/models/lookup-model';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { MockService } from 'src/app/core/services/mock-service';
import { Bank } from '../../entities/enums/bank-type';
import { Check } from '../../entities/models/check';
import { CheckApiService } from '../services/check-api.service';
import { CheckBanksApiService } from '../services/checks-bank-api.service';
import { ChecksCustomersApiService } from '../services/checks-customer-api.service';
import { CheckRelatedData } from './resolved-data/check-related-data';

@Injectable({ providedIn: 'root' })
export class CheckResolver
  implements Resolve<ResolvedData<Check, CheckRelatedData>>
{
  constructor(
    private _apiService: CheckApiService,
    private _checkBanksApiService: CheckBanksApiService,
    private _checkCustomersApiService: ChecksCustomersApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResolvedData<Check, CheckRelatedData>> {
    const banks$ = this._checkBanksApiService.get();

    return banks$.pipe(
      mergeMap(banks =>
        this._checkCustomersApiService.get().pipe(
          map(customers => {
            return {
              banks: banks.data,
              customers: customers.data
            } as CheckRelatedData;
          })
        )
      ),
      switchMap(relatedData => {
        if (state.url.includes('/edit')) {
          return this.getExistingCheck(route, relatedData);
        }

        return this.getNewCheck(relatedData);
      })
    );
  }

  private getNewCheck(
    relatedData: CheckRelatedData
  ): Observable<ResolvedData<Check, CheckRelatedData>> {
    return of({
      model: new Check(),
      relatedData: relatedData
    });
  }

  private getExistingCheck(
    route: ActivatedRouteSnapshot,
    relatedData: CheckRelatedData
  ): Observable<ResolvedData<Check, CheckRelatedData>> {
    return this._apiService.getById(route.paramMap.get('checkId')).pipe(
      map(apiResponse => {
        return {
          model: apiResponse.data[0],
          relatedData: relatedData
        };
      })
    );
  }
}
