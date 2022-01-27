import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { Tank } from '../../entities/models/Tank';

@Injectable({ providedIn: 'root' })
export class TankAPIService extends ApiService<Tank> {
  apiURL = 'tank';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }

  getByGasStationId(gasStationId: string): Observable<ApiResponse<Tank>> {
    return this._httpClient.get<ApiResponse<Tank>>(
      this.getUrl() + '/gas-station/' + gasStationId
    );
  }
}
