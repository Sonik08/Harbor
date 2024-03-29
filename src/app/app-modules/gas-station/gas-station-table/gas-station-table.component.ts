import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockService } from 'src/app/core/services/mock-service';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationApiService } from '../services/gas-station-api.service';

@Component({
  selector: 'gas-station-list',
  templateUrl: './gas-station-table.component.html',
  styleUrls: ['./gas-station-table.component.scss']
})
export class GasStationTableComponent implements OnInit {
  tableData: Observable<GasStation[]>;
  tableColumns: string[] = [];
  url = '/overview';
  addUrl = 'new';
  constructor(
    private _mockSrv: MockService,
    private _apiService: GasStationApiService
  ) {}

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(data => {
        return data.data;
      })
    );
  }
}
