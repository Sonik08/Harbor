import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionApiResponse } from 'src/app/core/models/action-api-response';
import { ApiResponse } from 'src/app/core/models/api-response';
import { ApiService } from 'src/app/core/services/api.service';
import { EnvService } from 'src/app/core/services/env.service';
import { Check } from '../../entities/models/Check';

@Injectable({ providedIn: 'root' })
export class CheckApiService extends ApiService<Check> {
  apiURL = 'checks';

  constructor(private httpClient: HttpClient, private envService: EnvService) {
    super(httpClient, envService);
  }

  voidCheck(check: Check): Observable<ActionApiResponse> {
    return this._httpClient.put<ActionApiResponse>(
      this.getUrl() + '/void-check/' + check.id,
      {}
    );
  }
}
