import { Injectable } from '@angular/core';
import { LookupVM } from 'src/app/core/vm/lookup.vm';
import { DakourisGasStationService } from '../services/dakouris-gas-station-api.service';

@Injectable()
export class DakourisGasStationVM extends LookupVM {
  constructor(private _apiService: DakourisGasStationService) {
    super(_apiService);
  }

  ngOnInit() {
    this.actions = this.getActions();
  }
}
