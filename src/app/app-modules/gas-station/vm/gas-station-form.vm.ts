import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationRelatedData } from '../resolvers/resolve-models/gas-station-related-data';

@Injectable()
export class GasStationVM extends BaseFormVM<
  GasStation,
  GasStationRelatedData
> {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    super(_activatedRoute);
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
    throw new Error('Method not implemented.');
  }
}
