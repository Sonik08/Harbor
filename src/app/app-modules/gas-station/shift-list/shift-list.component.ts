import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockService } from 'src/app/core/services/mock-service';
import { Shift } from '../../entities/models/shift';
import { ShiftAPIService } from '../services/shift-api.service';

@Component({
  selector: 'shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {
  tableData: Observable<Shift[]>;
  tableColumns: Observable<string[]>;
  url = '';
  constructor(
    private _mockSrv: MockService,
    private _shiftService: ShiftAPIService
  ) {}

  ngOnInit(): void {
    this.tableData = this._shiftService
      .get()
      .pipe(map(apiResponse => apiResponse.data));

    this.tableColumns = this._mockSrv.getShiftsTableColumns();
  }
}
