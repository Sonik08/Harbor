import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Tank } from 'src/app/app-modules/entities/models/tank';
import { Data } from 'src/app/pages/models/data';
import { GasStation } from '../../entities/models/gas-station';
import { TankAPIService } from '../services/tank-api.service';

@Component({
  selector: 'tank-table',
  templateUrl: './tank-table.component.html',
  styles: []
})
export class TankTableComponent implements OnInit {
  tableData: Observable<Tank[]>;
  tableColumns: Observable<string[]>;
  url = '';
  addUrl = 'new';

  columns = ['name', 'fuelType', 'currentAmount', 'maxCapacity'];

  constructor(
    private _tankService: TankAPIService,
    private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const gasStationId$ = this._activatedRoute.parent.params.pipe(
      map(params => {
        console.log(params);
        return params['gasStationId'];
      })
    )

    this.tableData = gasStationId$.pipe(
      switchMap(gasStationId => {
        return this._tankService.getByGasStationId(gasStationId).pipe(
          map(data => {
            return data.data;
          })
        )
      })
    );

    // this.tableData = this._tankService.getByGasStationId().pipe(
    //   map(data => {
    //     return data.data;
    //   })
    // );

    this.tableColumns = of(this.columns);
  }
}
