import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { TankLevel } from '../../entities/models/tank-level';

@Injectable({ providedIn: 'root' })
export class TankLevelApiService extends ApiService<TankLevel> {
  apiURL = 'tank-level';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
