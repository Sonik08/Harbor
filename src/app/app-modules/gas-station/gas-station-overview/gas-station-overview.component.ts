import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IExpantionPanelItem } from 'src/app/core/models/expantion-panel-item';
import { IListItem } from 'src/app/core/models/list-item';
import { MockService } from 'src/app/core/services/mock-service';
import { Data } from 'src/app/pages/models/data';
import { GasStation } from '../../models/gas-station';

@Component({
  selector: 'gas-station-overview',
  templateUrl: './gas-station-overview.component.html',
  styleUrls: ['./gas-station-overview.component.scss']
})
export class GasStationOverviewComponent implements OnInit {
  expantionPanel: Observable<IExpantionPanelItem> = of();
  gasStation: Observable<GasStation>;
  constructor(
    private mockService: MockService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gasStation =  (this.route.data as Observable<Data<GasStation>>)
    .pipe(
      map(resolvedData => resolvedData.data)
    );

    this.expantionPanel = of(this.mockService.getExpantionPanelItem());
  }
}
