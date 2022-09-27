import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, single, switchMap, tap } from 'rxjs/operators';
import { ActionApiResponse } from '../models/api/action-api-response';
import { LookupModel } from '../models/lookups/lookup-model';
import { UIAction } from '../models/UI/ui-action';
import { UIActionType } from '../models/UI/ui-action-type.enum';
import { ApiService } from '../services/api.service';

export abstract class LookupVM {
  subject$: Subject<MatTableDataSource<LookupModel>> = new Subject<
    MatTableDataSource<LookupModel>
  >();

  data$: Observable<MatTableDataSource<LookupModel>> = this.subject$.pipe(
    switchMap(_ => {
      return this.apiService.get();
    }),
    map(res => new MatTableDataSource(res.data))
  );

  actions: UIAction[] = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(public apiService: ApiService<LookupModel>) {}

  put(lookupModel: LookupModel): Observable<ActionApiResponse> {
    return this.apiService
      .put(lookupModel)
      .pipe(filter(response => response.isSuccess));
  }

  post(lookupModel: LookupModel): Observable<ActionApiResponse> {
    return this.apiService
      .post(lookupModel)
      .pipe(filter(response => response.isSuccess));
  }

  delete(lookupModel: LookupModel): Observable<ActionApiResponse> {
    return this.apiService
      .delete(lookupModel.id)
      .pipe(filter(response => response.isSuccess));
  }

  refresh() {
    this.subject$.next();
  }

  getActions(): UIAction[] {
    return [
      {
        type: UIActionType.Update,
        name: 'Επεξεργασία',
        message: 'Επεξεργασία εγγραφής',
        isConfirmation: false,
        isShown: true,
        actionFn$: item => this.put(item)
      },
      {
        type: UIActionType.Delete,
        name: 'Διαγραφή',
        message: 'Θέλετε να διαγράψετε την εγγραφή?',
        isConfirmation: true,
        isShown: true,
        actionFn$: item => this.delete(item)
      },
      {
        type: UIActionType.New,
        name: 'Προσθήκη',
        message: 'Προσθήκη εγγραφής',
        isConfirmation: false,
        isShown: false,
        actionFn$: item => this.post(item)
      }
    ];
  }
}
