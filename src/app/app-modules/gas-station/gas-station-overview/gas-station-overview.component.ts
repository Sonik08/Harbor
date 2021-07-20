import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IListItem } from 'src/app/base-modules/models/list-item';
import { MockService } from 'src/app/base-modules/services/mock-serice';
import { Data } from 'src/app/core/models/data';
import { GasStation } from '../../models/gas-station';

@Component({
  selector: 'gas-station-overview',
  templateUrl: './gas-station-overview.component.html',
  styleUrls: ['./gas-station-overview.component.scss']
})
export class GasStationOverviewComponent implements OnInit {
  listItems: Observable<IListItem[]> = of([]);
  gasStation: Observable<GasStation>;
  constructor(
    private mockService: MockService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gasStation =  (this.route.data as Observable<Data<GasStation>>)
    .pipe(
      map(resolvedData => resolvedData.data)
    );
    
    this.listItems = of(this.mockService.getGasStationListItems());
  }
}
