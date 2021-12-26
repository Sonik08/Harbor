import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { GasStation } from '../../entities/models/gas-station';

@Injectable({ providedIn: 'root' })
export class GasStationAPIService extends ApiService<GasStation> {
  apiURL = 'gas-station';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
