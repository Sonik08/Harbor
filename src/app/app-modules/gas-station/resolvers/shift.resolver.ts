import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { MockService } from 'src/app/core/services/mock-service';
import { Shift } from '../../entities/models/shift';
import { ShiftApiService } from '../services/shift-api.service';
import { TankApiService } from '../services/tank-api.service';
import { ShiftRelatedData } from './resolve-models/shift-related-data';

@Injectable({ providedIn: 'root' })
export class ShiftResolver
  implements Resolve<ResolvedData<Shift, ShiftRelatedData>>
{
  constructor(
    private _mockService: MockService,
    private _shiftService: ShiftApiService,
    private _tankService: TankApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResolvedData<Shift, ShiftRelatedData>> {
    const gasStationId = route.parent.paramMap.get('gasStationId');

    const types$ = this._mockService.getShiftTypes();

    const tanks$ = this._tankService.getByGasStationId(gasStationId);

    return tanks$.pipe(
      map(tanksApiResponse => tanksApiResponse.data),
      switchMap(tanks => {
        return types$.pipe(
          map(types => {
            let model = new Shift();
            model.gasStationId = gasStationId;

            return {
              model: model,
              relatedData: {
                tanks: tanks,
                types: types
              }
            };
          })
        );
      }),
      switchMap(resolvedData => {
        const isEditing = state.url.includes('/edit');

        if (!isEditing) {
          return of(resolvedData);
        }

        return this._shiftService.getById(route.paramMap.get('shiftId')).pipe(
          map(shiftApiResponse => {
            resolvedData.model = shiftApiResponse.data[0];

            return resolvedData;
          })
        );
      })
    );
  }
}
