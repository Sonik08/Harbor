import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  ):
    | Observable<ResolvedData<Shift, ShiftRelatedData>>
    | Promise<ResolvedData<Shift, ShiftRelatedData>>
    | ResolvedData<Shift, ShiftRelatedData> {
    let gasStationId = route.parent.paramMap.get('gasStationId');

    return this._mockService.getShiftTypes().pipe(
      map(shiftTypes => {
        return {
          model: new Shift(),
          relatedData: {
            types: shiftTypes
          }
        } as ResolvedData<Shift, ShiftRelatedData>;
      })
    );
  }
}
