import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TankLevel } from '../../entities/models/tank-level';
import { TankLevelAPIService } from '../services/tank-level-api.service';

@Injectable({ providedIn: 'root' })
export class TankLevelResolver implements Resolve<TankLevel> {
  constructor(private _apiService: TankLevelAPIService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<TankLevel> | Promise<TankLevel> | TankLevel {
    return this._apiService.getById(route.paramMap.get('gasStationId')).pipe(
      map(apiResponse => {
        return apiResponse.data[0];
      })
    );
  }
}
