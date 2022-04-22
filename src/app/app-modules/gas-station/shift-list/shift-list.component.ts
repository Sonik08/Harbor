import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Data } from 'src/app/pages/models/data';
import { GasStation } from '../../entities/models/gas-station';
import { Shift } from '../../entities/models/shift';
import { ShiftApiService } from '../services/shift-api.service';

@Component({
  selector: 'shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {
  tableData: Observable<Shift[]>;
  tableColumns$: Observable<string[]>;
  tableColumns: string[] = ['type', 'date', 'income', 'gasStationName'];
  url = '/edit';
  constructor(
    private _shiftService: ShiftApiService, 
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const gasStation$ = (this._activatedRoute.data as Observable<Data<GasStation>>).pipe(
      map(resolvedData => resolvedData.data)
    );

    this.tableData = gasStation$.pipe(
      switchMap(gasStation => {
        return this._shiftService.get().pipe(
          map(apiResponse => {
            apiResponse.data.forEach(shift => {
              shift.gasStationName = gasStation.name;
              shift.date = formatDate(Date.now(),'dd-MM-yyyy', 'en-US');
            });
            return apiResponse.data;
          }),
        )
      }
    ));

    this.tableColumns$ = of(this.tableColumns);
  }
}
