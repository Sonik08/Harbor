import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockService } from 'src/app/base-components/services/mock-serice';
import { GasStation } from '../../models/gas-station';

@Component({
  selector: 'gas-station-list',
  templateUrl: './gas-station-list.component.html',
  styleUrls: ['./gas-station-list.component.scss']
})
export class GasStationListComponent implements OnInit {
  tableData: Observable<GasStation[]>;
  tableColumns: Observable<string[]>;
  url = '/overview';
  constructor(private _mockSrv: MockService) {}

  ngOnInit(): void {
    console.log(this._mockSrv.getGasStations());
    this.tableData = of(this._mockSrv.getGasStations());
    this.tableColumns = of(this._mockSrv.getGasStationTableColumns());
  }
}
