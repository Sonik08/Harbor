import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { Check } from '../../entities/models/Check';

@Injectable({ providedIn: 'root' })
export class CheckAPIService extends ApiService<Check> {
  apiURL = 'check';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
