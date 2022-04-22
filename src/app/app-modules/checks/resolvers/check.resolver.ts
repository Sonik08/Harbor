import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { MockService } from 'src/app/core/services/mock-service';
import { Check } from '../../entities/models/check';
import { CheckApiService } from '../services/check-api.service';
import { CheckRelatedData } from './resolved-data/check-related-data';

@Injectable({ providedIn: 'root' })
export class CheckResolver implements Resolve<ResolvedData<Check, CheckRelatedData>> {
  constructor(
    private _apiService: CheckApiService,
    private _mockService: MockService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResolvedData<Check, CheckRelatedData>> {
    const banks$ = this._mockService.getBankTypes();
    
    return this._apiService.getById(route.paramMap.get('checkId')).pipe(
      switchMap(apiResponse => {
        return banks$.pipe(
          map(banks => {
            return {
              model: apiResponse.data[0],
              relatedData: {
                banks: banks
              }
            };
          })
        );
      })
    );
  }
}
