import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from 'src/app/core/services/mock-service';
import { Shift } from '../../models/shift';

@Component({
  selector: 'shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  tableData: Observable<Shift[]>;
  tableColumns: Observable<string[]>
  url = "";
  constructor(private _mockSrv: MockService) { }

  ngOnInit(): void {
    this.tableData = this._mockSrv.getShifts();
    this.tableColumns = this._mockSrv.getShiftsTableColumns();

  }

}
