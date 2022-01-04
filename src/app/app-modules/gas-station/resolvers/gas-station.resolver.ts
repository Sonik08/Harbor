import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationAPIService } from '../services/gas-station.api-service';

@Injectable({ providedIn: 'root' })
export class GasStationResolver implements Resolve<GasStation> {
  constructor(private _apiService: GasStationAPIService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<GasStation> | Promise<GasStation> | GasStation {
    return this._apiService.getById(route.paramMap.get('gasStationId')).pipe(
      map(apiResponse => {
        return apiResponse.data[0];
      })
    );
  }
}
