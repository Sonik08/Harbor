import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IExpantionPanelItem } from 'src/app/core/models/UI/expantion-panel-item';
import { MockService } from 'src/app/core/services/mock-service';
import { Data } from 'src/app/pages/models/data';
import { GasStation } from '../../entities/models/gas-station';

@Component({
  selector: 'gas-station-overview',
  templateUrl: './gas-station-overview.component.html',
  styleUrls: ['./gas-station-overview.component.scss']
})
export class GasStationOverviewComponent implements OnInit {
  expantionPanel: Observable<IExpantionPanelItem> = of();
  gasStation: Observable<GasStation>;
  constructor(
    private _mockService: MockService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.gasStation = (this._activatedRoute.data as Observable<Data<GasStation>>).pipe(
      map(resolvedData => resolvedData.data)
    );

    this.expantionPanel = this._mockService.getExpantionPanelItem();
  }
}
