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

  expantionPanel: Observable<IExpantionPanelItem> = of({
    title: 'title',
    description: 'description',
    icon: 'person',
    url: './',
    listItems: [
      { title: 'Fuel Tank Levels', icon: 'euro', url: 'tanks' },
      { title: 'New Shift', icon: 'person', url: 'shifts/new' },
      { title: 'Shifts', icon: 'groups', url: 'shifts' }
    ]
  });

  gasStation: Observable<GasStation>;
  
  constructor(
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.gasStation = (this._activatedRoute.data as Observable<Data<GasStation>>).pipe(
      map(resolvedData => resolvedData.data)
    );
  }
}
