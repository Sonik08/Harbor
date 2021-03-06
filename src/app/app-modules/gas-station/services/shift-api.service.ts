import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { Shift } from '../../entities/models/shift';

@Injectable({ providedIn: 'root' })
export class ShiftApiService extends ApiService<Shift> {
  apiURL = 'shift';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
