import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormVM } from 'src/app/core/vm/form.vm';
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

  onInit() {
    super.onInit();
  }

  initializeModel() {
    this.model = new GasStation();
  }

  isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  loadRelatedData(): void {
    throw new Error('Method not implemented.');
  }
}
