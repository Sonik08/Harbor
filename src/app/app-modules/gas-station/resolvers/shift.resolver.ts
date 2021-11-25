import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ResolvedData } from 'src/app/core/models/resolved-data';
import { MockService } from 'src/app/core/services/mock-service';
import { Shift } from '../../entities/models/shift';
import { ShiftRelatedData } from './resolve-models/shift-related-data';

@Injectable({ providedIn: 'root' })
export class ShiftResolver
  implements Resolve<ResolvedData<Shift, ShiftRelatedData>>
{
  constructor(private _mockService: MockService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ResolvedData<Shift, ShiftRelatedData>> {
    const gasStationId = route.parent.paramMap.get('gasStationId');

    const tanks$ = this._mockService.getGasStationTanks(gasStationId);
    const types$ = this._mockService.getShiftTypes();

    return tanks$.pipe(
      switchMap(tanks => {
        return types$.pipe(
          map(types => {
            return {
              model: new Shift(),
              relatedData: {
                tanks: tanks,
                types: types
              }
            };
          })
        );
      })
    );
  }
}
