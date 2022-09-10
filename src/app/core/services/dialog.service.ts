import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { MaterialDialogComponent } from '../material-dialog/material-dialog.component';
import { LookupModel } from '../models/lookup-model';
import { UIAction } from '../models/UI/ui-action';
import { UIActionType } from '../models/UI/ui-action-type.enum';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private dialog: MatDialog) {
  }

  openDialog(item, action: UIAction): Observable<any> {
    const dialogConfig = this.getDialogConfig(item, action);

    const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);

    return dialogRef.afterClosed().pipe(
      filter(dialogResponse => dialogResponse !== undefined),
      concatMap(lookup => action.actionFn$(lookup))
    );
  }

  private getDialogConfig(item, action: UIAction) {
    const model =
      action.type === UIActionType.New
        ? this.setupEmptyLookupDialogModel()
        : item;
    model.action = action.type;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = model;

    return dialogConfig;
  }

  private setupEmptyLookupDialogModel() {
    let model = new LookupModel();
    model.id = 0;
    model.name = '';
    return model;
  }
}
