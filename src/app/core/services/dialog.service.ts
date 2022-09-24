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
  constructor(private dialog: MatDialog) {}

  openDialog(item, action: UIAction): Observable<any> {
    const dialogConfig = this.getDialogConfig(item, action);

    const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);

    return dialogRef.afterClosed().pipe(
      filter(dialogResponse => dialogResponse !== undefined),
      concatMap(lookup => action.actionFn$(lookup))
    );
  }

  // openDialogWithCustomMessage(
  //   item,
  //   action: UIAction,
  //   title: string,
  //   text: string
  // ): Observable<any> {
  //   const dialogConfig = this.getDialogConfigWithCustomMessage(
  //     item,
  //     action,
  //     title,
  //     text
  //   );

  //   const dialogRef = this.dialog.open(MaterialDialogComponent, dialogConfig);

  //   return dialogRef.afterClosed().pipe(
  //     filter(dialogResponse => dialogResponse !== undefined),
  //     concatMap(lookup => action.actionFn$(lookup))
  //   );
  // }

  private getDialogConfig(item: LookupModel, action: UIAction) {
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
}
