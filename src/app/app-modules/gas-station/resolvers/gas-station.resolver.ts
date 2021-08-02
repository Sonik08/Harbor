import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MockService } from 'src/app/core/services/mock-service';
import { GasStation } from '../../models/gas-station';

@Injectable({ providedIn: 'root' })
export class GasStationResolver implements Resolve<GasStation> {
  constructor(private _mockSrv: MockService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<GasStation> | Promise<GasStation> | GasStation {
    return this._mockSrv.getGasStationById(route.paramMap.get('id'));
  }
}
