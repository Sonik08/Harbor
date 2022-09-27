import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionApiResponse } from 'src/app/core/models/api/action-api-response';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { Fuel } from '../../entities/models/fuel';
import { GasStation } from '../../entities/models/gas-station';

@Injectable({ providedIn: 'root' })
export class DakourisFuelApiService extends ApiService<Fuel> {
  apiURL = 'fuel';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }

  addGasStationTofuel(
    entity: number,
    gasStations: GasStation[]
  ): Observable<ActionApiResponse> {
    return this._httpClient.put<ActionApiResponse>(
      this.getUrl() + '/' + entity,
      gasStations
    );
  }
}
