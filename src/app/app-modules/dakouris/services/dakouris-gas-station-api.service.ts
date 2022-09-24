import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LookupModel } from 'src/app/core/models/lookup-model';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';

@Injectable({ providedIn: 'root' })
export class DakourisGasStationService extends ApiService<LookupModel> {
  apiURL = 'gasStations';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
