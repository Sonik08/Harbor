import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Column } from 'src/app/core/models/UI/column';
import { Check } from '../../entities/models/check';
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
      propertyName: 'fromCustomerId',
      isLookup: true
    },
    {
      label: 'Αριθμός επιταγής',
      propertyName: 'checkNumber',
      isLookup: false
    },
    {
      label: 'Τράπεζα',
      propertyName: 'bankId',
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
      propertyName: 'toCustomerId',
      isLookup: true
    },
    {
      label: 'Ποσό',
      propertyName: 'amount',
      isLookup: false
    }
  ];

  constructor(private _apiService: CheckApiService, private _router: Router) {}

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(response => {
        return response.data;
      })
    );
  }
}
