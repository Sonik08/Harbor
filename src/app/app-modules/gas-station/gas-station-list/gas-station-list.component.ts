import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockService } from 'src/app/core/services/mock-service';
import { GasStation } from '../../entities/models/gas-station';
import { GasStationAPIService } from './../services/gas-station.api-service';

@Component({
  selector: 'gas-station-list',
  templateUrl: './gas-station-list.component.html',
  styleUrls: ['./gas-station-list.component.scss']
})
export class GasStationListComponent implements OnInit {
  tableData: Observable<GasStation[]>;
  tableColumns: Observable<string[]>;
  url = '/overview';
  addUrl = 'new';
  constructor(
    private _mockSrv: MockService,
    private _apiService: GasStationAPIService
  ) {}

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(data => {
        return data.data;
      })
    );

    this.tableColumns = of(this._mockSrv.getGasStationTableColumns());
  }
}
