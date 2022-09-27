import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { DakourisFuelDialogComponent } from 'src/app/app-modules/dakouris/dakouris-fuels/dakouris-fuel-dialog/dakouris-fuel-dialog.component';
import { Fuel } from 'src/app/app-modules/entities/models/fuel';
import { GasStation } from 'src/app/app-modules/entities/models/gas-station';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';
import { LookupModel } from '../models/lookups/lookup-model';
import { UIAction } from '../models/UI/ui-action';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(item, action: UIAction): Observable<any> {
    const dialogConfig = this.getLookupDialogConfig(item, action);

    const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);

    return dialogRef.afterClosed().pipe(
      filter(dialogResponse => dialogResponse !== undefined),
      concatMap(lookup => action.actionFn$(lookup))
    );
  }

  openFuelDialog(item: Fuel, gasStations: GasStation[], action: UIAction) {
    const dialogConfig = this.getFuelDialogCongig(item, gasStations, action);

    const dialogRef = this.dialog.open(
      DakourisFuelDialogComponent,
      dialogConfig
    );

    return dialogRef.afterClosed().pipe(
      filter(dialogResponse => dialogResponse !== undefined),
      concatMap(lookup => action.actionFn$(lookup))
    );
  }

  private getLookupDialogConfig(item: LookupModel, action: UIAction) {
    const model =
      item === null || item === undefined
        ? this.setupEmptyLookupDialogModel()
        : item;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      model: model,
      action: action
    };

    return dialogConfig;
  }

  private setupEmptyLookupDialogModel() {
    let model = new LookupModel();
    model.id = 0;
    model.name = '';
    return model;
  }

  private getFuelDialogCongig(
    item: Fuel,
    gasStations: GasStation[],
    action: UIAction
  ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      model: item,
      gasStations: gasStations,
      action: action
    };

    return dialogConfig;
  }
}
