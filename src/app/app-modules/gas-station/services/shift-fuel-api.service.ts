import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { ShiftFuel } from '../../entities/models/shift-fuel';

@Injectable({ providedIn: 'root' })
export class ShiftFuelApiService extends ApiService<ShiftFuel> {
  apiURL = 'shift-fuel';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
