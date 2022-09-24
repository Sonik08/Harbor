import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Column } from 'src/app/core/models/UI/column';
import { UIAction } from 'src/app/core/models/UI/ui-action';
import { UIActionType } from 'src/app/core/models/UI/ui-action-type.enum';
import { Check } from '../../entities/models/check';
import { CheckRelatedData } from '../resolvers/resolved-data/check-related-data';
import { CheckApiService } from '../services/check-api.service';

@Component({
  selector: 'check-table',
  templateUrl: './check-table.component.html',
  styleUrls: ['./check-table.component.scss']
})
export class CheckTableComponent implements OnInit {
  tableData: Observable<Check[]>;
  url = '/edit';
  addUrl = 'new';

  columns: Column[] = [
    {
      label: 'ID',
      propertyName: 'id',
      isLookup: false
    },
    {
      label: 'Από πελάτη',
      propertyName: 'fromCustomer',
      isLookup: true
    },
    {
      label: 'Αριθμός επιταγής',
      propertyName: 'checkNumber',
      isLookup: false
    },
    {
      label: 'Τράπεζα',
      propertyName: 'bank',
      isLookup: true
    },
    {
      label: 'Ημ/νια Αποστολής',
      propertyName: 'dateOfDispatch',
      isLookup: false
    },
    {
      label: 'Ημ/νια Λήξης',
      propertyName: 'expirationDate',
      isLookup: false
    },
    {
      label: 'Προς πελάτη',
      propertyName: 'toCustomer',
      isLookup: true
    },
    {
      label: 'Ποσό',
      propertyName: 'amount',
      isLookup: false
    }
  ];

  actions: UIAction[] = [
    {
      type: UIActionType.Update,
      name: 'Επεξεργασία',
      message: 'Επεξεργασία επιταγής',
      isConfirmation: false,
      actionFn$: item => this.put(item)
    },
    {
      type: UIActionType.Delete,
      name: 'Διαγραφή',
      message: 'Θέλετε να διαγράψετε την επιταγή?',
      isConfirmation: true,
      actionFn$: item => this.delete(item)
    },
    {
      type: UIActionType.VoidCheck,
      name: 'Σφραγισμα',
      message: 'Θέλετε να σφραγίσετε την επιταγή',
      isConfirmation: true,
      actionFn$: item => this.void(item)
    }
  ];

  constructor(
    private _apiService: CheckApiService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(response => {
        return response.data;
      }),
      switchMap((checks: Check[]) => {
        return this._activatedRoute.data.pipe(
          map(resolvedData => {
            return resolvedData.data as CheckRelatedData;
          }),
          map((relatedData: CheckRelatedData) => {
            // this data can and probably should come from the backend.
            for (let check of checks) {
              check.bank = relatedData.banks.find(b => b.id === check.bankId);
              check.toCustomer = relatedData.customers.find(
                c => c.id === check.toCustomerId
              );
              check.fromCustomer = relatedData.customers.find(
                c => c.id === check.fromCustomerId
              );
            }

            return checks;
          }),
          map(checks => {
            return checks.map(c => {
              c.dateOfDispatch = c.dateOfDispatch.substring(
                0,
                c.dateOfDispatch.length - 9
              );
              c.expirationDate = c.expirationDate.substring(
                0,
                c.expirationDate.length - 9
              );

              return c;
            });
          })
        );
      })
    );
  }

  put(check: Check) {
    this._router.navigate([check.id + this.url], {
      relativeTo: this._activatedRoute
    });

    return of();
  }

  delete(check: Check) {
    return this._apiService
      .delete(check.id)
      .pipe(filter(response => response.isSuccess));
  }

  void(check: Check) {
    return this._apiService.voidCheck(check);
  }
}
