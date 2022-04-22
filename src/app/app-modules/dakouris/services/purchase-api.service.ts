import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { GasStation } from '../../entities/models/gas-station';
import { Purchase } from '../../entities/models/Purchase';

@Injectable({ providedIn: 'root' })
export class PurchaseApiService extends ApiService<Purchase> {
  apiURL = 'dakouris/purchases';
  gasStations$: Observable<GasStation>;

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }
}
