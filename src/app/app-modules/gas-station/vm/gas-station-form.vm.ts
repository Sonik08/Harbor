import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationRelatedData } from '../resolvers/resolve-models/gas-station-related-data';
import { GasStationApiService } from '../services/gas-station-api.service';

@Injectable()
export class GasStationVM extends BaseFormVM<
  GasStation,
  GasStationRelatedData
> {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: GasStationApiService
  ) {
    super(_activatedRoute, _router, _apiService);
  }

  onInit(): void {
    this.model = new GasStation();

    super.onInit();
  }

  getModel(): Observable<GasStation> {
    // this.model = new GasStation();

    return this.model$;
  }

  isNew(): boolean {
    return !this._router.url.includes('edit');
  }
}
