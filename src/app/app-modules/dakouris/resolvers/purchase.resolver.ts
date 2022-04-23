import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { Purchase } from '../../entities/models/Purchase';
import { GasStationApiService } from '../../gas-station/services/gas-station-api.service';
import { PurchaseApiService } from '../services/purchase-api.service';
import { PurchaseRelatedData } from './resolved-data/purchase-related-data';

@Injectable({ providedIn: 'root' })
export class PurchaseResolver
  implements Resolve<ResolvedData<Purchase, PurchaseRelatedData>>
{
  constructor(
    private _purchaseService: PurchaseApiService,
    private _gasStationService: GasStationApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResolvedData<Purchase, PurchaseRelatedData>> {
    const gasStations$ = this._gasStationService.get();

    return gasStations$.pipe(
      switchMap(gasStationResponse => {
        const isEditing = state.url.includes('/edit');

        if (isEditing) {
          return this._purchaseService
            .getById(route.paramMap.get('purchaseId'))
            .pipe(
              map(purchaseResponse => {
                return {
                  model: purchaseResponse.data[0],
                  relatedData: {
                    gasStations: gasStationResponse.data
                  }
                };
              })
            );
        }

        return of({
          model: new Purchase(),
          relatedData: {
            gasStations: gasStationResponse.data
          }
        });
      })
    );
  }
}
