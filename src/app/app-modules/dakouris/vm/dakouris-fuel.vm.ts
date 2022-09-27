import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ActionApiResponse } from 'src/app/core/models/api/action-api-response';
import { UIAction } from 'src/app/core/models/UI/ui-action';
import { UIActionType } from 'src/app/core/models/UI/ui-action-type.enum';
import { LookupVM } from 'src/app/core/vm/lookup.vm';
import { GasStation } from '../../entities/models/gas-station';
import { DakourisFuelApiService } from '../services/dakouris-fuel-api.service';

@Injectable()
export class DakourisFuelVM extends LookupVM {
  extraActions: UIAction[] = [
    {
      type: UIActionType.AddGasStationToFuel,
      name: 'Προσθήκη πρατηρίου στο είδος καυσίμου',
      message: 'Προσθήκη καυσίμου',
      isConfirmation: false,
      isShown: true,
      actionFn$: response =>
        this.addGasStationToFuel(response.modelId, response.gasStations)
    }
  ];

  constructor(private _apiService: DakourisFuelApiService) {
    super(_apiService);
  }

  ngOnInit() {
    this.actions = this.getActions();

    for (let i = 0; i < this.extraActions.length; i++) {
      this.actions.push(this.extraActions[i]);
    }
  }

  addGasStationToFuel(
    entityId: number,
    gasStations: GasStation[]
  ): Observable<ActionApiResponse> {
    return this._apiService
      .addGasStationTofuel(entityId, gasStations)
      .pipe(filter(response => response.isSuccess));
  }
}
