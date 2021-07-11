import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IListItem } from 'src/app/base-modules/models/list-item';
import { MockService } from 'src/app/base-modules/services/mock-serice';

@Component({
  selector: 'gas-station-overview',
  templateUrl: './gas-station-overview.component.html',
  styleUrls: ['./gas-station-overview.component.scss']
})
export class GasStationOverviewComponent implements OnInit {
  listItems: Observable<IListItem[]> = of([]);

  constructor(private mockService: MockService) {
    console.log('Overview is constructed');
  }

  ngOnInit(): void {
    console.log('overview');
    this.listItems = of(this.mockService.getGasStationListItems());
  }
}
