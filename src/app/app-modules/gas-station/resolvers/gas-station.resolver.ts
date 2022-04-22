import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationApiService } from '../services/gas-station-api.service';

@Injectable({ providedIn: 'root' })
export class GasStationResolver implements Resolve<GasStation> {
  constructor(private _apiService: GasStationApiService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<GasStation> | Promise<GasStation> | GasStation {
    let id = route.paramMap.get('gasStationId');

    if(null === id){
      id = route.parent.paramMap.get('gasStationId');
    }

    return this._apiService.getById(id).pipe(
      map(apiResponse => {
        return apiResponse.data[0];
      })
    );
  }
}
