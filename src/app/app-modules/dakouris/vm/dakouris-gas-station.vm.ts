import { Injectable } from '@angular/core';
import { LookupVM } from 'src/app/core/vm/lookup.vm';
import { DakourisGasStationApiService } from '../services/dakouris-gas-station-api.service';

@Injectable()
export class DakourisGasStationVM extends LookupVM {
  constructor(private _apiService: DakourisGasStationApiService) {
    super(_apiService);
  }

  ngOnInit() {
    this.actions = this.getActions();
  }
}
