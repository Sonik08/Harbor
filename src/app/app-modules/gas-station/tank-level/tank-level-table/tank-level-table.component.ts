import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TankLevel } from '../../../entities/models/tank-level';
import { TankLevelApiService } from '../../services/tank-level-api.service';

@Component({
  selector: 'tank-level-table',
  templateUrl: './tank-level-table.component.html',
  styles: [
  ]
})
export class TankLevelTableComponent implements OnInit {

  tableData: Observable<TankLevel[]>;
  tableColumns: Observable<string[]>;
  url = '/edit';
  addUrl = 'new';

  columns = [
    "id",
    "incoming",
    "outgoing",
    "description",
    "currentLevel",
    "tankId",
  ]

  constructor(private _apiService: TankLevelApiService) { }

  ngOnInit(): void {
    this.tableData = this._apiService.get().pipe(
      map(data => {
        return data.data;
      })
    );

    this.tableColumns = of(this.columns);
  }
}
