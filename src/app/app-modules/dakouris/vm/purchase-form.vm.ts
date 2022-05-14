import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SelectItem } from 'src/app/core/models/UI/select-item';
import { BaseFormVM } from 'src/app/core/vm/base-form.vm';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationFuelPurchases } from '../../entities/models/gas-station-fuel-purchase';
import { Purchase } from '../../entities/models/Purchase';
import { PurchaseRelatedData } from '../resolvers/resolved-data/purchase-related-data';
import { PurchaseApiService } from '../services/purchase-api.service';

@Injectable()
export class PurchaseVM extends BaseFormVM<Purchase, PurchaseRelatedData> {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _apiService: PurchaseApiService
  ) {
    super(_activatedRoute, _apiService);
  }
  gasStations$: Observable<SelectItem[]> = of([]);

  onInit(): void {
    this.gasStations$ = this._activatedRoute.data.pipe(
      map(resolvedData => {
        return this.gasStationsToSelectItems(
          resolvedData.data.relatedData.gasStations
        );
      })
    );

    super.onInit();
  }

  getModel(): Observable<Purchase> {
    // this.model = new Purchase();

    return of(new Purchase()).pipe(switchMap(model => this.model$));
  }

  isNew(): boolean {
    return !this._router.url.includes('edit');
  }

  public addFuelToForm() {
    console.log('Hello World!');
  }

  public getGasStationFuelPurchases(): Observable<GasStationFuelPurchases[]> {
    return of([]);
  }

  private gasStationsToSelectItems(gasStations: GasStation[]): SelectItem[] {
    return gasStations.map(gasStation => {
      return {
        label: gasStation.name,
        value: gasStation.id
      };
    });
  }
}
