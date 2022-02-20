import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Check } from '../../entities/models/check';
import { CheckAPIService } from '../services/check-api.service';

@Component({
  selector: 'check-table',
  templateUrl: './check-table.component.html',
  styleUrls: ['./check-table.component.scss']
})
export class CheckTableComponent implements OnInit {
  tableData: Observable<Check[]>;
  tableColumns: Observable<string[]>;
  url = '/edit';
  addUrl = 'new';

  columns = [
    "id",
    "bank",
    "expiratioNDate",
    "sentFrom",
    "sentTo",
  ]

  constructor(private _apiService: CheckAPIService) {}

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(data => {
        return data.data;
      })
    );

    this.tableColumns = of(this.columns);
  }
}
