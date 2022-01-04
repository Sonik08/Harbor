import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationRelatedData } from '../resolvers/resolve-models/gas-station-related-data';
import { GasStationAPIService } from '../services/gas-station.api-service';

@Injectable()
export class GasStationVM extends BaseFormVM<
  GasStation,
  GasStationRelatedData
> {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: GasStationAPIService
  ) {
    super(_activatedRoute, _apiService);
  }

  onInit(): void {
    super.onInit();
  }

  initializeModel(): void {
    this.model$ = of(new GasStation());
  }

  isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  loadResolvedData(): void {
    //throw new Error('Method not implemented.');
  }
}
