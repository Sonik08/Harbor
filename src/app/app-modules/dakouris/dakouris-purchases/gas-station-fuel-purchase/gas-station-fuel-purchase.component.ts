import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FuelType } from 'src/app/app-modules/entities/enums/fuel-type';
import { GasStationFuelPurchases } from 'src/app/app-modules/entities/models/gas-station-fuel-purchase';

@Component({
  selector: 'gas-station-fuel-purchase',
  templateUrl: './gas-station-fuel-purchase.component.html',
  styles: []
})
export class GasStationFuelPurchaseComponent {
  @Input() form: FormGroup;
  @Input() gasStationFuelPurchase: GasStationFuelPurchases;

  getFuelTypes(): Observable<FuelType[]> {
    return of(Object.values(FuelType));
  }
}
