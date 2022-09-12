import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CheckBanksApiService } from '../services/checks-bank-api.service';
import { ChecksCustomersApiService } from '../services/checks-customer-api.service';
import { CheckRelatedData } from './resolved-data/check-related-data';

@Injectable({ providedIn: 'root' })
export class CheckTableResolver implements Resolve<CheckRelatedData> {
  constructor(
    private _checkBankApiService: CheckBanksApiService,
    private _checkCustomerApiService: ChecksCustomersApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CheckRelatedData> {
    return this._checkBankApiService.get().pipe(
      mergeMap(banks =>
        this._checkCustomerApiService.get().pipe(
          map(customers => {
            return {
              banks: banks.data,
              customers: customers.data
            };
          })
        )
      )
    );
  }
}
